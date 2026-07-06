import { movieVectorRepository } from
    "../repositories/movieVectorRepository.js";
import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";
import type { SearchMovieVectorDTO } from "../dtos/movie/SearchMovieVectorDTO.js";

class MovieVectorService {

    async search(
        searchVector: SearchMovieVectorDTO
    ) {

        const results = await movieVectorRepository.search(
            searchVector
        );

        return results;

    }

    async createBatch(
        movieVectors: MovieVectorDTO[]
    ) {

        await movieVectorRepository.saveBatch(
            movieVectors
        );

    }


    async count() {

        return await movieVectorRepository.count();

    }


    async clear() {

        return await movieVectorRepository.clear();

    }

}

export const movieVectorService =
    new MovieVectorService();