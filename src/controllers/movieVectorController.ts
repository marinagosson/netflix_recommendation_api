import type { Request, Response } from "express";
import { movieVectorService } from "../services/movieVectorService.js";
import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";
import type { SearchMovieVectorDTO } from "../dtos/movie/SearchMovieVectorDTO.js";

class MovieVectorController {

    async search(req: Request, res: Response) {

        const searchVector = req.body as SearchMovieVectorDTO;

        const results = await movieVectorService.search(
            searchVector
        );

        return res.json({
            results
        });

    }

    async createBatch(req: Request, res: Response) { 

        const movieVectors = req.body as MovieVectorDTO[];

        await movieVectorService.createBatch(
            movieVectors
        );

        return res.status(201).json({
            message: "Vetores importados com sucesso."
        });


    }

    async count(req: Request, res: Response) {

        const total = await movieVectorService.count();

        return res.json({
            count: total
        });

    }

    async clear(req: Request, res: Response) {

        await movieVectorService.clear();

        return res.status(200).json({
            message: "Banco de dados limpo com sucesso."
        });

    }
}

export const movieVectorController =
    new MovieVectorController();