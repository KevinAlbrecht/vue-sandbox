import Home from "./pages/Home";
import Genre from "./pages/Genre";
import VueRouter from 'vue-router';
import { MoviesLayout } from './layouts';
const routes = [
	{
		path: '/', component: MoviesLayout, children: [
				{ path: '', component: Home, name:"home" },
				{ path: 'genre/:genreName-:genreId', component: Genre, name: 'genre', props: true },
				{ path: 'movie/:id', component: null, name: 'movie' }
			]
	},
	// {
	// 	path: '/profile', component: null, children: [
	// 		{ path: '', component: null, name: 'profile' },
	// 		{ path: 'cart', component: null, name: 'cart' },
	// 		{ path: 'history', component: null, name: 'history' },
	// 	]
	// },
	{ path: '*', redirect: '/' }
]

export default new VueRouter({ routes });
