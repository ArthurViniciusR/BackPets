import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateProductController } from "./controllers/CreateProductController";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {
    
    fastify.post("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request, reply)
    })

}