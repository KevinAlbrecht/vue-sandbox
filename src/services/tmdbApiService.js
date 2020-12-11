import HttpClient from './httpService';
class TmdbApiService {
	#httpClient;
	#apiKey = process.env.VUE_APP_TMDB_APIKEY;
	#baseApi = 'https://api.themoviedb.org/3/';
	#genreUrl = 'genre/movie/list?';
	#topRated = 'movie/top_rated?';
	#latest = 'movie/latest?';
	#popular = 'movie/popular?';
	#trending = 'trending/movie/day?';
	#discover = 'discover/movie?';

	constructor() {
		this.#httpClient = new HttpClient(this.#baseApi, this.#apiKey);
	}

	async getDiscover(query) {
		const queryScheme = {
			'page': 'page',
			'withGenres': 'with_genres'
		}
		return await this.#httpClient.fetch(this.#discover, query, queryScheme);
	}
	async getTrending() {
		return await this.#httpClient.fetch(this.#trending);
	}

	async getGenres() {
		return await this.#httpClient.fetch(this.#genreUrl);
	}

	async getTopRaded() {
		return await this.#httpClient.fetch(this.#topRated);
	}

	async getLatest() {
		return await this.#httpClient.fetch(this.#latest);
	}

	async getPopular() {
		return await this.#httpClient.fetch(this.#popular);
	}

	async search(s, type, page) {
	}

	async getById(id) {
	}
}

const instance = new TmdbApiService();

export default instance;