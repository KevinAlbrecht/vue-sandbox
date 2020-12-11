import HttpClient from './httpService';

class VodApiService {
	#httpClient;
	#baseApi = 'http://localhost:7071/api/';
	#genres = 'genres';
	#moviesByGenreId = 'movies/genre/'
	#movieById = 'movie/';
	#suggestions ="movies/suggestions"

	constructor() {
		this.#httpClient = new HttpClient(this.#baseApi);
	}

	async getGenres() {
		return await this.#httpClient.fetch(this.#genres);
	}
	async getMoviesByGenreId(genreId) {
		return await this.#httpClient.fetch(this.#moviesByGenreId+genreId);
	}

	async getMovieById() {
		return await this.#httpClient.fetch(this.#movieById);
	}

	async getSuggestions() {
		return await this.#httpClient.fetch(this.#suggestions);
	}
}

const instance = new VodApiService();

export default instance;