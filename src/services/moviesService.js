import vodApiService from './vodApiService';
class MoviesService {
	#genres;

	handleError(err) {
		console.log('err', err);
		return {};
	}

	constructor() { }

	async getSuggestions() {
		const response = await vodApiService.getSuggestions().catch(this.handleError);	
		return await response.json();
	}

	async getGenres() {
		if (!this.#genres){
			const result =  await vodApiService.getGenres().catch(this.handleError);
			this.#genres = await result.json();
		}
		return this.#genres;
	}

	async getMoviesByGenreId(genreId) {
		return (await (await vodApiService.getMoviesByGenreId(genreId).catch(this.handleError)).json());
	}
	async getMoviesById(movieId) {
		return (await (await vodApiService.getMovieById(movieId).catch(this.handleError)).json());
	}
}
const instance = new MoviesService();
export default instance;
