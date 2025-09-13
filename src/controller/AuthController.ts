import { Statut } from "../enum/Statut.js";
import { AuthService } from "../service/AuthService.js";
import { SchemaCreateUser } from "../validatore/UserValidatore.js";
import type { Request, Response } from "express";


 const authService = new AuthService();

export class AuthController {

    static async getAll(_req: Request, res: Response) {
            try {
                const users = await authService.findAll();
                res.status(Statut.SUCCES).json(users);
    
            } catch (error) {
    
                res.status(Statut.ERREUR).json({ message: error })
            }
    
        }

    static async inscription(req: Request, res: Response) {
            try {
                const data = SchemaCreateUser.parse(req.body);
                const user = await authService.inscription(data);
    
                res.status(Statut.CREE).json(user);
    
            } catch (error) {
    
                res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });

            }
        }

        static async connexion(req : Request, res:Response){
            try {
                const {login, password} = req.body;
                const connec = await authService.connexion(login, password);

                res.status(Statut.CREE).json(connec);
                
                
            } catch (error) {

                res.status(Statut.ERREUR).json({ message: `erreur server : ${error}` });
            }
    }
    
}