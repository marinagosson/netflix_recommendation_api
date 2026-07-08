import { healthService } from "../services/healthService.js";
class HealthController {
    async check(req, res) {
        const result = await healthService.check();
        debugger;
        return res.json(result);
    }
}
export const healthController = new HealthController();
