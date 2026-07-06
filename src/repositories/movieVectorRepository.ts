import { database } from "../config/database.js";
import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";
import type { SearchMovieVectorDTO } from "../dtos/movie/SearchMovieVectorDTO.js";

class MovieVectorRepository {

    async search(
        searchVector: SearchMovieVectorDTO
    ) {

        const client = await database.connect();

        try {

            const result = await client.query(
                `
                SELECT movie_id, title, embedding <=>  $1::vector AS distance
                FROM movie_vectors
                ORDER BY embedding <=> $1::vector
                LIMIT $2
                `,
                [
                    JSON.stringify(searchVector.embedding),
                    searchVector.limit
                ]
            );

            return result.rows.map((row) => ({
                id: row.movie_id,
                title: row.title,
                distance: row.distance
            }));

        } finally {

            client.release();

        }

    }   

    async clear() {
        
        try {

            await database.query("TRUNCATE movie_vectors");

        } catch (error) {

            await database.query("ROLLBACK");

        }

    }
    
    async count(): Promise<number> {

        const client = await database.connect();

        try {

            const result = await client.query(
                `
                SELECT COUNT(*) AS count
                FROM movie_vectors;
                `
            );
            return Number(result.rows[0].count);

        } finally {

            client.release();

        }

    }

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
                        movie.id,
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