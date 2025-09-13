import { PrismaClient } from "@prisma/client";
export class UserRepository {
    prisma = new PrismaClient();
    async findAll() {
        return await this.prisma.users.findMany();
    }
    async findById(id) {
        return await this.prisma.users.findUnique({
            where: { id }
        });
    }
    async inscription(data) {
        return await this.prisma.users.create({ data });
    }
    async update(id, data) {
        return await this.prisma.users.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.users.delete({ where: { id } });
    }
    async findByEmail(login) {
        return await this.prisma.users.findUnique({
            where: { login }
        });
    }
}
//# sourceMappingURL=UserRepository.js.map