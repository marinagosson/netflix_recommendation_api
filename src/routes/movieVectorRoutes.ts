import { Router } from "express";
import { movieVectorController } from "../controllers/movieVectorController.js";

export const movieVectorRoutes = Router();

movieVectorRoutes.post(
    "/batch",
    movieVectorController.createBatch
);

movieVectorRoutes.get(
    "/count",
    movieVectorController.count
);

movieVectorRoutes.get(
    "/clear",
    movieVectorController.clear
);

movieVectorRoutes.post(
    "/search",
    movieVectorController.search
);