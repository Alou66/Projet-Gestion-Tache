import z from "zod";

export const SchemaCreateUser = z.object({
    nom: z.string().min(2, "minimum 2 caractere").max(20, "maximun 20 caractere"),
    login: z.string().email("L'email doit être valide"),
    password: z.string().min(4, "minimum 4 caractere").max(8, "maximun 8 caractere"),
});