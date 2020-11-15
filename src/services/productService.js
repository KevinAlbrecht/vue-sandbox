import tmdbApiService from './tmdbApiService';

const asyncMockTimer = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 600));

export default {
	async getGenres() {
		return (await (await tmdbApiService.getGenres()).json()).genres;
	},
	async getTopRaded() {
		return await tmdbApiService.getTopRaded();
	},
	async getLatest() {
		return await tmdbApiService.getLatest();
	},
	async getPopular() {
		return await tmdbApiService.getPopular();
	}
}
