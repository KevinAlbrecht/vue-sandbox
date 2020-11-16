import UrlBuilder from '../helpers/UrlBuilder';

class OmdbApiService {
	constructor() { }
	#baseApi = `http://www.omdbapi.com?`;

	movieType = {
		MOVIE: "movie",
		SERIES: "series",
		EPISODE: "episode"
	};

	async search(s, type, page) {
		const urlBuilder = new urlBuilder(this.#baseApi);
		const url = urlBuilder.s(s).type(type).page(page).build();
		return await fetch({ method: 'get', url });
	}

	async getById(id) {
		const url = new OmdbBuilder(this.#baseApi).id(id).build();
		return await fetch({ method: 'get', url })
	}
}

class OmdbBuilder extends UrlBuilder {

	construct(baseUrl) {
		super(baseUrl);
	}
	s(token) { return this.addQueryParam('s', token); }
	type(token) { return this.addQueryParam('type', token); };
	page(token) { return this.addQueryParam('page', token); };
	id(token) { return this.addQueryParam('i', token) }
}

const instance = new OmdbApiService();

export default instance;