import { type Users } from "@prisma/client";
export declare class UserRepository {
    private prisma;
    findAll(): Promise<Users[]>;
    findById(id: number): Promise<Users | null>;
    inscription(data: Omit<Users, "id">): Promise<Users>;
    update(id: number, data: Partial<Users>): Promise<Users>;
    delete(id: number): Promise<void>;
    findByEmail(login: string): Promise<Users | null>;
}
//# sourceMappingURL=UserRepository.d.ts.map