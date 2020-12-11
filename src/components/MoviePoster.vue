<template>
  <div>
    <div class="img_container">
      <img v-once :src="computePosterUrl(movie.posterPath)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  methods: {
    computePosterUrl(path) {
      return `${process.env.VUE_APP_TMDB_IMG_URL}${path}`;
    },
  },
};
</script>

<style>
.img_container {
  width: 100%;
}
.img_container img {
  width: 100%;
}
</style>