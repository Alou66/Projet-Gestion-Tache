import { PrismaClient } from "@prisma/client";
export class TacheRepository {
    prisma = new PrismaClient();
    async findAll() {
        return await this.prisma.taches.findMany();
    }
    async findById(id) {
        return await this.prisma.taches.findUnique({
            where: { id }
        });
    }
    async create(data) {
        return await this.prisma.taches.create({ data });
    }
    async update(id, data) {
        return await this.prisma.taches.update({ where: { id }, data });
    }
    async delete(id) {
        await this.prisma.taches.delete({ where: { id } });
    }
}
//# sourceMappingURL=TacheRepository.js.map