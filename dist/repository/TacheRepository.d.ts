import { type Taches } from "@prisma/client";
import type { IRepository } from "./IRepository.js";
export declare class TacheRepository implements IRepository<Taches> {
    private prisma;
    findAll(): Promise<Taches[]>;
    findById(id: number): Promise<Taches | null>;
    create(data: Omit<Taches, "id">): Promise<Taches>;
    update(id: number, data: Partial<Taches>): Promise<Taches>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=TacheRepository.d.ts.map