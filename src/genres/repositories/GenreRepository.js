import Genre from './mongo/GenreModel';

export default class GenreRepository {
    async getAll() {
        return Genre.find();
    }

    async getById(id) {
        return Genre.findOne({ id });
    }
}
