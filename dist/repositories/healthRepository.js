import { database } from "../config/database/database.js";
class HealthRepository {
    async check() {
        const result = await database.query("SELECT NOW()");
        return result.rows[0].now;
    }
}
export const healthRepository = new HealthRepository();
