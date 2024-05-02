import prismaClient from "../prisma/prisma";

interface CreateProductProps{
    type: string;
    name: string;
    price: number;
    description: string;
}

class CreateProductService{
    async execute({type, name, price, description}: CreateProductProps){

        if(!type || !name || !price || !description){
            throw new Error("Preencha todos os campos")
        }

        const product = await prismaClient.products.create({
            data:{
                type,
                name, 
                price,
                description,
            }
        })

        return product
    }
}

export {CreateProductService}