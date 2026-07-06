
import { userVectorRepository } from
    "../repositories/userVectorRepository.js";
import type { UserVectorDTO } from "../dtos/user/UserVectorDTO.js";

class UserVectorService {

    async createBatch(
        movieVectors: UserVectorDTO[]
    ) {

        await userVectorRepository.saveBatch(
            movieVectors
        );

    }


    async count() {

        return await userVectorRepository.count();

    }


    async clear() {

        return await userVectorRepository.clear();

    }

}

export const userVectorService =
    new UserVectorService();