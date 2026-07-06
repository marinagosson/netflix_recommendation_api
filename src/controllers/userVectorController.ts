import type { Request, Response } from "express";
import { userVectorService } from "../services/userVectorService.js";
import type { UserVectorDTO } from "../dtos/user/UserVectorDTO.js";

class UserVectorController {

    async createBatch(req: Request, res: Response) { 

        const movieVectors = req.body as UserVectorDTO[];

        await userVectorService.createBatch(
            movieVectors
        );

        return res.status(201).json({
            message: "Vetores importados com sucesso."
        });


    }

    async count(req: Request, res: Response) {

        const total = await userVectorService.count();

        return res.json({
            count: total
        });

    }

    async clear(req: Request, res: Response) {

        await userVectorService.clear();

        return res.status(200).json({
            message: "Banco de dados limpo com sucesso."
        });

    }
}

export const userVectorController =
    new UserVectorController();