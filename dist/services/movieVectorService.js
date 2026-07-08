import { movieVectorRepository } from "../repositories/movieVectorRepository.js";
class MovieVectorService {
    async search(searchVector) {
        const results = await movieVectorRepository.search(searchVector);
        return results;
    }
    async createBatch(movieVectors) {
        await movieVectorRepository.saveBatch(movieVectors);
    }
    async count() {
        return await movieVectorRepository.count();
    }
    async clear() {
        return await movieVectorRepository.clear();
    }
}
export const movieVectorService = new MovieVectorService();
