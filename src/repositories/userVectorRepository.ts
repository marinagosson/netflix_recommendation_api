import { database } from "../config/database/database.js";
import type { UserVectorDTO } from "../dtos/user/UserVectorDTO.js";

class UserVectorRepository {
    
    async clear() {
        
        try {

            await database.query("TRUNCATE user_vectors");

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
                FROM user_vectors;
                `
            );
            return Number(result.rows[0].count);

        } finally {

            client.release();

        }

    }    

    async saveBatch(
        userVectors: UserVectorDTO[]
    ) {

        const client = await database.connect();

        try {

            await client.query("BEGIN");
            
            for (const user of userVectors) {

                await client.query(
                    `
                    INSERT INTO user_vectors
                    (
                        user_id,
                        name,
                        embedding
                    )
                    VALUES
                    (
                        $1,
                        $2,
                        $3
                    )
                    ON CONFLICT (user_id)
                    DO UPDATE
                    SET
                        name = EXCLUDED.name,
                        embedding = EXCLUDED.embedding
                    `,
                    [
                        user.id,
                        user.name,
                        JSON.stringify(user.embedding)
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
    
    async save(userVector: any) {

        await database.query(
            `
            INSERT INTO user_vectors
            (
                user_id,
                name,
                embedding
            )
            VALUES
            (
                $1,
                $2,
                $3
            )
            ON CONFLICT (user_id)
            DO UPDATE
            SET
                name = EXCLUDED.name,
                embedding = EXCLUDED.embedding;
            `,
            [
                userVector.userId,
                userVector.name,
                JSON.stringify(userVector.embedding)
            ]
        );

    }   
}

export const userVectorRepository =
    new UserVectorRepository();