import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.teal.darken1,
				secondary: '#34495e',
				accent: colors.teal.accent2
			},
			dark: {
				primary: '#41b883',
				secondary: '#34495e',
				accent: colors.teal.accent2
			}
		}
	}
});
