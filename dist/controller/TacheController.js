import { SchemaCreate } from "../validatore/TacheValidatore.js";
import { TacheService } from "../service/TacheService.js";
import { Statut } from "../enum/Statut.js";
const tacheService = new TacheService();
export class TacheController {
    static async getAll(_req, res) {
        try {
            const taches = await tacheService.findAll();
            res.status(Statut.SUCCES).json(taches);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: error });
        }
    }
    static async getById(req, res) {
        try {
            const id = Number(req.params.id);
            const tache = await tacheService.findById(id);
            res.status(Statut.SUCCES).json(tache);
            // res.json(tache);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
    static async create(req, res) {
        try {
            const data = SchemaCreate.parse(req.body);
            const user_id = req.user?.id;
            const tache = await tacheService.create({
                ...data,
                statut: "EN_COURS",
                id_user: user_id
            });
            res.status(Statut.CREE).json(tache);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
    static async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = SchemaCreate.parse(req.body);
            const tache = await tacheService.update(id, data);
            res.json(tache);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
    static async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await tacheService.delete(id);
            res.send("Tache supprimé avec succes");
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
    static async updateStatut(req, res) {
        const statutvalide = ["EN_COURS", "TERMINER", "A_FAIRE"];
        const id = Number(req.params.id);
        const { statut } = req.body;
        const data = req.body;
        if (!statutvalide.includes(statut)) {
            return res.status(Statut.NON_TROUVE).json({ error: "statut invalide" });
        }
        try {
            const tache = await tacheService.update(id, data);
            res.json(tache);
        }
        catch (error) {
            res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
        }
    }
}
//# sourceMappingURL=TacheController.js.map