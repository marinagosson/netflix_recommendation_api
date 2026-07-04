import type { MovieVectorDTO } from "../dtos/movie/MovieVectorDTO.js";
declare class MovieVectorRepository {
    saveBatch(movieVectors: MovieVectorDTO[]): Promise<void>;
    save(movieVector: any): Promise<void>;
}
export declare const movieVectorRepository: MovieVectorRepository;
export {};
//# sourceMappingURL=movieVectorRepository.d.ts.map