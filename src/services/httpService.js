export default class HttpClient {
	#baseUrl;
	constructor(baseUrl) {
		if (!baseUrl) throw new Error('baseUrl required');
		this.#baseUrl = baseUrl;
	}

	// Support for the experimental syntax 'classPrivateMethods' isn't currently enabled, so it goes public
	mapQueryParams(query, queryScheme) {
		let queryStringBuilder = '?';

		if (query && queryScheme) {
			const keys = Object.keys(queryScheme);

			for (let k in keys) {
				const prop = keys[k];
				const propName = queryScheme[prop]

				const value = query[prop];
				if (value) {
					if (value instanceof Array)
						for (let v in value) queryStringBuilder += `&${propName}=${v}`;
					else queryStringBuilder += `&${propName}=${encodeURIComponent(value)}`;
				}
			}
		}

		return queryStringBuilder;
	}

	async fetch(route, query = null, queryScheme = null) {
		const url = `${this.#baseUrl}${route}${query ? this.mapQueryParams(query, queryScheme) : ''}`;
		return await fetch(url, { cache: 'force-cache' })
	}
}