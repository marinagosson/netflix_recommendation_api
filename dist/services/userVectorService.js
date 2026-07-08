import { userVectorRepository } from "../repositories/userVectorRepository.js";
class UserVectorService {
    async createBatch(movieVectors) {
        await userVectorRepository.saveBatch(movieVectors);
    }
    async count() {
        return await userVectorRepository.count();
    }
    async clear() {
        return await userVectorRepository.clear();
    }
}
export const userVectorService = new UserVectorService();
