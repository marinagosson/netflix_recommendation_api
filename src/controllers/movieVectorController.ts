import type { Request, Response } from "express";
import { movieVectorService } from "../services/movieVectorService.js";
import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";

class MovieVectorController {

    async createBatch(req: Request, res: Response) { 

        const movieVectors = req.body as MovieVectorDTO[];

        await movieVectorService.createBatch(
            movieVectors
        );

        return res.status(201).json({
            message: "Vetores importados com sucesso."
        });


    }

}

export const movieVectorController =
    new MovieVectorController();