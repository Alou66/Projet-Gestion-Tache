import { Statut } from "../enum/Statut.js";
import { AuthService } from "../service/AuthService.js";
import { SchemaCreateUser } from "../validatore/UserValidatore.js";
const authService = new AuthService();
export class AuthController {
    static async getAll(_req, res) {
        try {
            const users = await authService.findAll();
            res.status(Statut.SUCCES).json(users);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: error });
        }
    }
    static async inscription(req, res) {
        try {
            const data = SchemaCreateUser.parse(req.body);
            const user = await authService.inscription(data);
            res.status(Statut.CREE).json(user);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
    static async connexion(req, res) {
        try {
            const { login, password } = req.body;
            const connec = await authService.connexion(login, password);
            res.status(Statut.CREE).json(connec);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
}
//# sourceMappingURL=AuthController.js.map