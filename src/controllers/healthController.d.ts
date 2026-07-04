import type { Request, Response } from "express";
declare class HealthController {
    check(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const healthController: HealthController;
export {};
//# sourceMappingURL=healthController.d.ts.map