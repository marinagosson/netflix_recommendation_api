import { Router } from "express";
import { userVectorController } from "../controllers/userVectorController.js";
export const userVectorRoutes = Router();
userVectorRoutes.post("/batch", userVectorController.createBatch);
userVectorRoutes.get("/count", userVectorController.count);
userVectorRoutes.get("/clear", userVectorController.clear);
