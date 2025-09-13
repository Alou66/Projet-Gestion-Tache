import jwt from "jsonwebtoken";
export interface Payload {
    id: number;
    login: string;
}
export declare class JwtToken {
    static genereToken(payload: Payload): string;
    static verifieToken(token: string): string | jwt.JwtPayload;
}
//# sourceMappingURL=JwtToken.d.ts.map