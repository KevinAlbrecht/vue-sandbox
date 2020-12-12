export default class UrlBuilder {
	#baseUrl = '';
	construct(baseUrl) {
		if (!baseUrl) throw new Error('base url missing');
		this.#baseUrl = baseUrl;
	}
	addQueryParam(paramName, value) { if (!!value) { this.#baseUrl += `${paramName}=${encodeURIComponent(value)}&`; } return this; }

	
	build() { return this.#baseUrl }
}
