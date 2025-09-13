import type { Users } from "@prisma/client";
import { UserRepository } from "../repository/UserRepository.js";
import  bcryptjs  from "bcryptjs";
import { JwtToken } from "../util/JwtToken.js";


export class AuthService {
     private userRepos = new UserRepository();
    
        async findAll():Promise<Users[]>{
            return await this.userRepos.findAll(); 
        }
    
        async findById(id:number) : Promise<Users|null>{
            return await this.userRepos.findById(id);
        }
    
        async inscription(data:Omit<Users,"id" >) : Promise<Users>{

            const cryptepassword =  await bcryptjs.hash(data.password, 10);
            return await this.userRepos.inscription({
                ...data,
                password:cryptepassword
            });
        }

        async update(id:number,data:Partial<Users>): Promise<Users>{
            return await this.userRepos.update(id, data);
        }
    
        async delete(id:number) :Promise<void>{
            await this.userRepos.delete(id);
        }

        async login(login:string):Promise<Users | null>{
            return await this.userRepos.findByEmail(login);
           
    }      

        async connexion(login:string, password:string){
            const user = await this.login(login);
    
            if (!user) {
                throw new Error("email n'existe pas ")
            }
            const passwordDecrypte = await bcryptjs.compare(password, user.password);
            if(!passwordDecrypte){
                throw new Error("mot de passe incorecte");
            }

            const token = JwtToken.genereToken({id:user.id, login:user.login});
            
            return {user, token};

        }

}