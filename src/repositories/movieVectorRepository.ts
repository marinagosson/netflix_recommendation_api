import { database } from "../config/database.js";
import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";

class MovieVectorRepository {

    async saveBatch(
        movieVectors: MovieVectorDTO[]
    ) {

        const client = await database.connect();

        try {

            await client.query("BEGIN");

            for (const movie of movieVectors) {

                await client.query(
                    `
                    INSERT INTO movie_vectors
                    (
                        movie_id,
                        title,
                        embedding
                    )
                    VALUES
                    (
                        $1,
                        $2,
                        $3
                    )
                    ON CONFLICT (movie_id)
                    DO UPDATE
                    SET
                        title = EXCLUDED.title,
                        embedding = EXCLUDED.embedding
                    `,
                    [
                        movie.movieId,
                        movie.title,
                        JSON.stringify(movie.embedding)
                    ]
                );

            }

            await client.query("COMMIT");

        } catch (error) {

            await client.query("ROLLBACK");

            throw error;

        } finally {

            client.release();

        }

    }

    async save(movieVector: any) {

        await database.query(
            `
            INSERT INTO movie_vectors
            (
                movie_id,
                title,
                embedding
            )
            VALUES
            (
                $1,
                $2,
                $3
            )
            ON CONFLICT (movie_id)
            DO UPDATE
            SET
                title = EXCLUDED.title,
                embedding = EXCLUDED.embedding;
            `,
            [
                movieVector.movieId,
                movieVector.title,
                JSON.stringify(movieVector.embedding)
            ]
        );

    }

}

export const movieVectorRepository =
    new MovieVectorRepository();