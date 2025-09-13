import { Router } from "express";
import { TacheController } from "../controller/TacheController.js";
import { AuthMidlleware } from "../middleware/AuthMiddleware.js";

const router = Router();
// const TacheControlle = new TacheController();

router.get("/", TacheController.getAll);
router.get("/:id", TacheController.getById);
router.post("/", AuthMidlleware.authentification, TacheController.create);
router.put("/:id", TacheController.update);
router.delete("/:id", TacheController.delete);
router.patch("/:id/statut", TacheController.updateStatut);


export default router;