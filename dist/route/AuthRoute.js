import { Router } from "express";
import { AuthController } from "../controller/AuthController.js";
const router = Router();
router.get("/", AuthController.getAll);
// router.get("/:id", TacheController.getById);
router.post("/inscription", AuthController.inscription);
router.post("/connexion", AuthController.connexion);
// router.put("/:id", TacheController.update);
// router.delete("/:id", TacheController.delete);
// router.patch("/:id/statut", TacheController.updateStatut);
export default router;
//# sourceMappingURL=AuthRoute.js.map