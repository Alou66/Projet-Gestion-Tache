import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
// const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as string;
export class JwtToken {
    static genereToken(payload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
    }
    static verifieToken(token) {
        return jwt.verify(token, JWT_SECRET);
    }
}
//# sourceMappingURL=JwtToken.js.map