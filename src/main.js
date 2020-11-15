import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const routes = [
	{ path: '/', component: Home },
	{ path: '/cart', component: Cart },
	{ path: '/product/:id', component: Product }]

const router = new VueRouter({routes});

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')
