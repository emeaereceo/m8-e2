import { Router } from "express";
import { procesarArchivo } from "../controllers/avatar.controllers.js";

const router = Router();

router.post("/upload/avatar/:userId", procesarArchivo);

// router.get("/")

export default router;
