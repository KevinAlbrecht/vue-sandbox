<template>
  <div class="grid-container" v-if="movies">
    <div class="box" v-for="movie in movies" :key="movie.id">
      <movie-poster :movie="movie"></movie-poster>
    </div>
  </div>
</template>

<script>
import MoviePoster from "../MoviePoster.vue";
export default {
  components: { MoviePoster },
  props: ["movies"],
};
</script>

<style>
.grid-container {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* grid-template-rows: repeat(4, auto); */
  gap: 20px;
}

</style>