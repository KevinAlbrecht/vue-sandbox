<template>
  <div id="suggested-content">
    <main class="grid">
      <slider v-if="trending" :movies="trending" :title="'Trending'"></slider>
      <!-- <slider v-if="discover" :movies="discover" :title="'Discover'"></slider> -->
    </main>
  </div>
</template>

<script>
import MovieService from "../../services/moviesService";
import Slider from "./Slider";
export default {
  components: { Slider },
  data: () => ({
    discover: null,
    trending: null,
    isLoading: false,
  }),
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      const suggesteds = await MovieService.getSuggested();
      // Q&D Force a slice to choose how many result I need, can't specify 'items per page' in api
      this.trending = suggesteds.trending.results.slice(0, 18);
      this.discover = suggesteds.discover.results.slice(0, 18);
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
</style>