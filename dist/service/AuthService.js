import { UserRepository } from "../repository/UserRepository.js";
import bcryptjs from "bcryptjs";
import { JwtToken } from "../util/JwtToken.js";
export class AuthService {
    userRepos = new UserRepository();
    async findAll() {
        return await this.userRepos.findAll();
    }
    async findById(id) {
        return await this.userRepos.findById(id);
    }
    async inscription(data) {
        const cryptepassword = await bcryptjs.hash(data.password, 10);
        return await this.userRepos.inscription({
            ...data,
            password: cryptepassword
        });
    }
    async update(id, data) {
        return await this.userRepos.update(id, data);
    }
    async delete(id) {
        await this.userRepos.delete(id);
    }
    async login(login) {
        return await this.userRepos.findByEmail(login);
    }
    async connexion(login, password) {
        const user = await this.login(login);
        if (!user) {
            throw new Error("email n'existe pas ");
        }
        const passwordDecrypte = await bcryptjs.compare(password, user.password);
        if (!passwordDecrypte) {
            throw new Error("mot de passe incorecte");
        }
        const token = JwtToken.genereToken({ id: user.id, login: user.login });
        return { user, token };
    }
}
//# sourceMappingURL=AuthService.js.map