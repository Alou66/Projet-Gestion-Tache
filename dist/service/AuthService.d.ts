import type { Users } from "@prisma/client";
export declare class AuthService {
    private userRepos;
    findAll(): Promise<Users[]>;
    findById(id: number): Promise<Users | null>;
    inscription(data: Omit<Users, "id">): Promise<Users>;
    update(id: number, data: Partial<Users>): Promise<Users>;
    delete(id: number): Promise<void>;
    login(login: string): Promise<Users | null>;
    connexion(login: string, password: string): Promise<{
        user: {
            id: number;
            login: string;
            nom: string;
            password: string;
        };
        token: string;
    }>;
}
//# sourceMappingURL=AuthService.d.ts.map