<template>
  <div id="suggested-content">
    <main class="grid">
      <slider v-if="latest" :movies="latest" :title="'Latest'"></slider>
      <slider v-if="topRated" :movies="topRated" :title="'Top Rated'"></slider>
    </main>
  </div>
</template>

<script>
import MovieService from "../../services/moviesService";
import Slider from "./Slider";
export default {
  components: { Slider },
  data: () => ({
    latest: null,
    topRated: null,
    isLoading: false,
  }),
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      const suggesteds = await MovieService.getSuggestions();
      // Q&D Force a slice to choose how many result I need, can't specify 'items per page' in api
      this.latest = suggesteds.latest.data;
      this.topRated = suggesteds.topRated.data;
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
#suggested-content {
  width: 100%;
  padding: 50px 0 50px 260px;
}

#suggested-content .slider_main {
  margin-bottom: 50px;
}
#suggested-content .slider_main:last-child {
  margin-bottom: 0;
}
</style>