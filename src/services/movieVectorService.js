import { movieVectorRepository } from "../repositories/movieVectorRepository.js";
class MovieVectorService {
    async createBatch(movieVectors) {
        await movieVectorRepository.saveBatch(movieVectors);
    }
}
export const movieVectorService = new MovieVectorService();
//# sourceMappingURL=movieVectorService.js.map