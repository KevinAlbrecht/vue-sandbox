import tmdbApiService from './tmdbApiService';

const asyncMockTimer = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 600));

export default {
	handleError(err) {
		console.log('err', err);
		return {};
	},
	async getGenres() {
		return (await (await tmdbApiService.getGenres().catch(this.handleError)).json()).genres;
	},
	async getTopRaded() {
		return (await (await tmdbApiService.getTopRaded().catch(this.handleError)).json()).genres;
	},
	async getLatest() {
		return (await (await tmdbApiService.getLatest().catch(this.handleError)).json()).genres;
	},
	async getPopular() {
		return (await (await tmdbApiService.getPopular().catch(this.handleError)).json()).genres;
	},
	async getSuggested() {
		const rawResults = await Promise.all([
			tmdbApiService.getDiscover().catch(this.handleError),
			tmdbApiService.getTrending().catch(this.handleError)]);
		const jsonResults = await Promise.all([...rawResults].map(r => r.json()))
		return { discover: jsonResults[0], trending: jsonResults[1] };
	},
}
