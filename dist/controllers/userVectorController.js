import { userVectorService } from "../services/userVectorService.js";
class UserVectorController {
    async createBatch(req, res) {
        const movieVectors = req.body;
        await userVectorService.createBatch(movieVectors);
        return res.status(201).json({
            message: "Vetores importados com sucesso."
        });
    }
    async count(req, res) {
        const total = await userVectorService.count();
        return res.json({
            count: total
        });
    }
    async clear(req, res) {
        await userVectorService.clear();
        return res.status(200).json({
            message: "Banco de dados limpo com sucesso."
        });
    }
}
export const userVectorController = new UserVectorController();
