import { PrismaClient, type Users } from "@prisma/client";
import type { IRepository } from "./IRepository.js";

export class UserRepository{

    private prisma = new PrismaClient();

    async findAll():Promise<Users[]>{
            return await this.prisma.users.findMany();
         }

    async findById(id:number) : Promise<Users|null>{
            return await this.prisma.users.findUnique({
                    where: {id}
                });
             }

    async inscription(data: Omit<Users,"id"> ) : Promise<Users>{
            return await this.prisma.users.create({data});
    }

    async update(id:number,data:Partial<Users>): Promise<Users>{
                return await this.prisma.users.update({where: {id}, data});
            }
        
    async delete(id:number) :Promise<void>{
                await this.prisma.users.delete({where: {id}})
            }

    async findByEmail(login:string):Promise<Users | null>{
            return await this.prisma.users.findUnique({
                where: {login}
            });
    }        

}