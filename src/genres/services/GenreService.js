export default class GenreService {
    constructor(genreRepository) {
        this.genreRepository = genreRepository;
    }

    async getAllGenres() {
        return this.genreRepository.getAll();
    }

    async getGenreById(id) {
        return this.genreRepository.getById(id);
    }
}
