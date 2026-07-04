import type { Request, Response } from "express";
import { healthService } from "../services/healthService.js";

class HealthController{

    async check(req: Request, res: Response) {

        const result = await healthService.check();
        debugger;
        return res.json(result);
     }
}

export const healthController = new HealthController();