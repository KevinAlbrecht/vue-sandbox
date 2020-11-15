// import UrlBuilder from '../helpers/UrlBuilder';

class TmdbApiService {
	constructor() { }
	#apiKey = '679d3846a91ee6e3a5416a6dcda44ea4';
	#baseApi = 'https://api.themoviedb.org/3/';
	#genreUrl = this.#baseApi + 'genre/movie/list?';
	#topRated = this.#baseApi + 'movie/top_rated?';
	#latest = this.#baseApi + 'movie/latest?';
	#popular = this.#baseApi + 'movie/popular?';

	async getGenres() {
		const url = `${this.#genreUrl}api_key=${this.#apiKey}`;
		return await fetch(url,{cache:'force-cache'});
	}

	async getTopRaded() {
		const url = `${this.#topRated}api_key=${this.#apiKey}`;
		return await fetch(url,{cache:'force-cache'});
	}

	async getLatest() {
		const url = `${this.#latest}api_key=${this.#apiKey}`;
		return await fetch(url,{cache:'force-cache'});
	}

	async getPopular() {
		const url = `${this.#popular}api_key=${this.#apiKey}`;
		return await fetch(url,{cache:'force-cache'});
	}

	async search(s, type, page) {
	
	}

	async getById(id) {
		
	}
}

// class TmdbUrlBuilder extends UrlBuilder {
// 	construct(baseUrl) {
// 		super(baseUrl);
// 	}

// }

const instance = new TmdbApiService();


export default instance;