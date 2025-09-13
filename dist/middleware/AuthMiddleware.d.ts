import type { NextFunction, Request, Response } from "express";
import { type Payload } from "../util/JwtToken.js";
declare global {
    namespace Express {
        interface Request {
            user?: Payload;
        }
    }
}
export declare class AuthMidlleware {
    static authentification(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=AuthMiddleware.d.ts.map