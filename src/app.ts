import express from "express";
import cors from "cors";

import { healthRouter } from "./routes/healthRoutes.js";
import { movieVectorRoutes } from "./routes/movieVectorRoutes.js";

export const app = express();

app.use(cors());

app.use(express.json());

app.use("/health", healthRouter);
app.use("/movie-vectors", movieVectorRoutes);