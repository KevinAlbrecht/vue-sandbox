import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Genre from "./pages/Genre";
import Movies from "./components/layout/Movies";
import VueRouter from 'vue-router';

const routes = [
	{ path: '/', component: Home, name: 'home' },
	{
		path: '/movies', component: Movies, children: [
			{ path: '/genre/:genreName-:genreId', component: Genre, name: 'genre', props: true}
			// { path: '/top-rated/', component: Product, name: 'toprated', props: true },
			// { path: '/popular/', component: Product, name: 'popular', props: true },
			// { path: '/latest/', component: Product, name: 'latest', props: true },
		]
	},
	// { path: '/movie/:id', component: Product, name: 'movie' },
	{
		path: '/profile', component: null, children: [
			{ path: '/', component: null, name: 'profile' },
			{ path: '/cart', component: null, name: 'cart' },
			{ path: '/history', component: null, name: 'history' },
		]
	},
	{ path: '*', redirect: '/' }
]

export default new VueRouter({ routes });
