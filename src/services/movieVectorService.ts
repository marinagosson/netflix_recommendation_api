import { movieVectorRepository } from
    "../repositories/movieVectorRepository.js";
import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";

class MovieVectorService {

    async createBatch(
        movieVectors: MovieVectorDTO[]
    ) {

        await movieVectorRepository.saveBatch(
            movieVectors
        );

    }

}

export const movieVectorService =
    new MovieVectorService();