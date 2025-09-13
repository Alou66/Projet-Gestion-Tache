import  jwt  from "jsonwebtoken";

export interface Payload {
        id: number;
        login:string;
    }

const JWT_SECRET = process.env.JWT_SECRET!;
// const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;

export class JwtToken {

   static genereToken(payload: Payload): string {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" }); 
    }
    static verifieToken(token:string){
        return jwt.verify(token, JWT_SECRET);
    }
}