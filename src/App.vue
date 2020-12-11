<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main :style="{ background: $vuetify.theme.themes[theme].secondary }">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MoviePoster from "./components/MoviePoster";
export default {
  name: "App",
  components: { MoviePoster },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
<style>
ul {
  list-style-type: none;
}
</style>