import type { NextFunction, Request, Response } from "express";
import { JwtToken, type Payload } from "../util/JwtToken.js";
import type { JwtPayload } from "jsonwebtoken";

declare global {
        namespace Express {
            interface Request {
                user?: Payload;
            }
        }
    }

export class AuthMidlleware{

    
    static authentification(req:Request, res: Response, next:NextFunction){

        const authHeader = req.headers["authorization"];
        if(!authHeader || !authHeader.startsWith("Bearer ")){

            return res.status(400).json({message:"Token manquant connecte toi d'abord"});

        }

        const token = authHeader.split(" ")[1];
        
        try {   
            const verifieToken= JwtToken.verifieToken(token!) as JwtPayload;
            req.user = {
                id: verifieToken.id,
                login: verifieToken.login
            }

            // JwtToken.verifieToken(token!) as JwtPayload;

            next();

        } catch (error) {
            res.status(401).json({message:"Token incorrecte ou expiré"});
        }

    }
}