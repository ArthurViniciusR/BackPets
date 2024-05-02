import prismaClient from "../prisma/prisma";

class CreateProductService{
    async execute(){

        console.log("rota chamada")

        return{ok:true}
    }
}

export {CreateProductService}