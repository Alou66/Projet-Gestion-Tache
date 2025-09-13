import { PrismaClient, type Taches } from "@prisma/client";
import type { IRepository } from "./IRepository.js";

export class TacheRepository implements IRepository<Taches>{

    private prisma : PrismaClient = new PrismaClient();

     async findAll():Promise<Taches[]>{
        return await this.prisma.taches.findMany();
     }

    async findById(id:number) : Promise<Taches|null>{
        return await this.prisma.taches.findUnique({
            where: {id}
        });
    }

    async create(data:Omit<Taches,"id">) : Promise<Taches>{
        return await this.prisma.taches.create({data});
    }

    async update(id:number,data:Partial<Taches>): Promise<Taches>{
        return await this.prisma.taches.update({where: {id}, data});
    }

    async delete(id:number) :Promise<void>{
        await this.prisma.taches.delete({where: {id}})
    }

}
