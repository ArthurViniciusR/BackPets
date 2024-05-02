import {FastifyRequest, FastifyReply} from "fastify";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { type, name, price, description } = 
        request.body as {type: string, name: string, price: number, description: string}

        const productService = new CreateProductService()
        const product = await productService.execute({type, name, price, description});

        reply.send(product)
    }
}

export {CreateProductController}