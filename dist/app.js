import express from "express";
import cors from "cors";
import { healthRouter } from "./routes/healthRoutes.js";
import { movieVectorRoutes } from "./routes/movieVectorRoutes.js";
import { userVectorRoutes } from "./routes/userVectorRoutes.js";
export const app = express();
app.use(cors());
app.use(express.json({
    limit: "50mb"
}));
app.use("/health", healthRouter);
app.use("/movie-vectors", movieVectorRoutes);
app.use("/user-vectors", userVectorRoutes);
