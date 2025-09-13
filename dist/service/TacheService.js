import { TacheRepository } from "../repository/TacheRepository.js";
export class TacheService {
    tacheRepos = new TacheRepository();
    async findAll() {
        return await this.tacheRepos.findAll();
    }
    async findById(id) {
        return await this.tacheRepos.findById(id);
    }
    async create(data) {
        return await this.tacheRepos.create(data);
    }
    async update(id, data) {
        return await this.tacheRepos.update(id, data);
    }
    async delete(id) {
        await this.tacheRepos.delete(id);
    }
}
//# sourceMappingURL=TacheService.js.map