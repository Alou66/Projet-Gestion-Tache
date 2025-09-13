import z from "zod";
export const SchemaCreate = z.object({
    titre: z.string().min(2, "minimum 2 caractere").max(20, "maximun 20 caractere"),
    description: z.string()
});
// export const SchemaStatut = z.object({
//     statut: z.string()
// });
// export const SchemaUpdate = z.object({
//     titre: z.string().min(2, "minimum 2 caractere").max(20, "maximun 20 caractere").optional(),
//     description: z.string().optional()
// });
//# sourceMappingURL=TacheValidatore.js.map