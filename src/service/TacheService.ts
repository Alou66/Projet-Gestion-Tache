import type { Taches } from "@prisma/client";
import type { IRepository } from "../repository/IRepository.js";
import { TacheRepository } from "../repository/TacheRepository.js";


export class TacheService implements IRepository<Taches> {

    private tacheRepos = new TacheRepository();

    async findAll():Promise<Taches[]>{
        return await this.tacheRepos.findAll(); 
    }

    async findById(id:number) : Promise<Taches|null>{
        return await this.tacheRepos.findById(id);
    }

    async create(data:Omit<Taches,"id" >) : Promise<Taches>{
        return await this.tacheRepos.create(data);
    }

    async update(id:number,data:Partial<Taches>): Promise<Taches>{
        return await this.tacheRepos.update(id, data);
    }
    
    async delete(id:number) :Promise<void>{
        await this.tacheRepos.delete(id);
    }

    //   async updateStatut(id:number, Statut: 'EN_COURS'| 'TERMINER'| 'A_FAIRE'): Promise<Taches>{
    //     return await this.tacheRepos.update(id, Taches);
    // }
}

