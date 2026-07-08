import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

function required(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Environment variable ${name} is not defined.`);
    }

    return value;
}

export const database = new Pool({
    host: process.env.PGHOST ?? required("DB_HOST"),
    port: Number(process.env.PGPORT ?? required("DB_PORT")),
    database: process.env.PGDATABASE ?? required("DB_NAME"),
    user: process.env.PGUSER ?? required("DB_USER"),
    password: process.env.PGPASSWORD ?? required("DB_PASSWORD"),
});