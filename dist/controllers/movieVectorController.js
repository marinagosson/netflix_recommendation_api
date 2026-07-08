import { movieVectorService } from "../services/movieVectorService.js";
class MovieVectorController {
    async search(req, res) {
        const searchVector = req.body;
        const results = await movieVectorService.search(searchVector);
        return res.json({
            results
        });
    }
    async createBatch(req, res) {
        const movieVectors = req.body;
        await movieVectorService.createBatch(movieVectors);
        return res.status(201).json({
            message: "Vetores importados com sucesso."
        });
    }
    async count(req, res) {
        const total = await movieVectorService.count();
        return res.json({
            count: total
        });
    }
    async clear(req, res) {
        await movieVectorService.clear();
        return res.status(200).json({
            message: "Banco de dados limpo com sucesso."
        });
    }
}
export const movieVectorController = new MovieVectorController();
