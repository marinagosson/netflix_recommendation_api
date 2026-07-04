import { movieVectorService } from "../services/movieVectorService.js";
class MovieVectorController {
    async createBatch(req, res) {
        const movieVectors = req.body;
        await movieVectorService.createBatch(movieVectors);
        return res.status(201).json({
            message: "Vetores importados com sucesso."
        });
    }
}
export const movieVectorController = new MovieVectorController();
//# sourceMappingURL=movieVectorController.js.map