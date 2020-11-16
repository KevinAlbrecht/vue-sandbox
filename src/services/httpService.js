export default class HttpClient {
	#baseUrl;
	#apiKey;
	constructor(baseUrl, apiKey) {
		if (!baseUrl) throw new Error('baseUrl required');
		this.#baseUrl = baseUrl;
		this.#apiKey = apiKey;
	}
	async fetch(route) {
		return await fetch(`${this.#baseUrl}${route}api_key=${this.#apiKey}`, { cache: 'force-cache' })
	}
}