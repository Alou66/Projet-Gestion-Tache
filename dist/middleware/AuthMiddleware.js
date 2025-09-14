import { JwtToken } from "../util/JwtToken.js";
export class AuthMidlleware {
    static authentification(req, res, next) {
        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(400).json({ message: "Token manquant connecte toi dabord" });
        }
        const token = authHeader.split(" ")[1];
        try {
            const verifieToken = JwtToken.verifieToken(token);
            req.user = {
                id: verifieToken.id,
                login: verifieToken.login
            };
            // JwtToken.verifieToken(token!) as JwtPayload;
            next();
        }
        catch (error) {
            res.status(500).json({ message: "Token incorrecte ou expiré" });
        }
    }
}
//# sourceMappingURL=AuthMiddleware.js.map