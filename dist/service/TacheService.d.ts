import type { Taches } from "@prisma/client";
import type { IRepository } from "../repository/IRepository.js";
export declare class TacheService implements IRepository<Taches> {
    private tacheRepos;
    findAll(): Promise<Taches[]>;
    findById(id: number): Promise<Taches | null>;
    create(data: Omit<Taches, "id">): Promise<Taches>;
    update(id: number, data: Partial<Taches>): Promise<Taches>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=TacheService.d.ts.map