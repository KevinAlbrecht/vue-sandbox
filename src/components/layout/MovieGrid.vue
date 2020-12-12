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
  gap: 20px;
}

@media screen and (max-width: 1500px) {
  .grid-container {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media screen and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>