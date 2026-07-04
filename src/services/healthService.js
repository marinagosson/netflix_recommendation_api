import { healthRepository } from "../repositories/healthRepository.js";
class HealthService {
    async check() {
        const databaseTime = await healthRepository.check();
        return {
            api: "running",
            database: "connected",
            timestamp: databaseTime
        };
    }
}
;
export const healthService = new HealthService();
//# sourceMappingURL=healthService.js.map