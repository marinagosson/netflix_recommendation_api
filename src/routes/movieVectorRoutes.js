import { Router } from "express";
import { movieVectorController } from "../controllers/movieVectorController.js";
export const movieVectorRoutes = Router();
movieVectorRoutes.post("/batch", movieVectorController.createBatch);
//# sourceMappingURL=movieVectorRoutes.js.map