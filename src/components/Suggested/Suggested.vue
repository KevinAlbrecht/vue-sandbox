<template>
  <div id="suggested-content">
    <main class="grid">
      <slider :movies="trending.results" :title="'Trending'"></slider>
      <slider :movies="discover.results" :title="'Discover'"></slider>
    </main>
  </div>
</template>

<script>
import MovieService from "../../services/moviesService";
import Slider from "./Slider";
export default {
  components: { Slider },
  data: () => ({
    discover: [],
    trending: [],
    isLoading: false,
  }),
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      const results = await MovieService.getSuggested();
      this.trending = results.trending;
      this.discover = results.discover;
    },
  },
  beforeMount() {
    this.fetchProducts();
  },
};
</script>

<style>
#suggested-content {
  width: 100%;
  padding-left: 260px;
  padding: 50px 50px 50px 310px;
}
</style>