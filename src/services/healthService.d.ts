declare class HealthService {
    check(): Promise<{
        api: string;
        database: string;
        timestamp: any;
    }>;
}
export declare const healthService: HealthService;
export {};
//# sourceMappingURL=healthService.d.ts.map