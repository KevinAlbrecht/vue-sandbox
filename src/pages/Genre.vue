<template>
  <div>
    <h1>{{ genreName }} {{ genreId }}</h1>
    <movie-grid :movies="movies"></movie-grid>
  </div>
</template>
<script>
import MovieService from "../services/moviesService";
import MovieGrid from "../components/layout/MovieGrid";

export default {
  props: ["genreName", "genreId"],
  components: { MovieGrid },
  data() {
    return {
      movies: [],
    };
  },
  async beforeMount() {
    if (!this.genreId) throw new Error("genre Id needed");

		this.movies = (await MovieService.getMoviesByGenreId(this.genreId)).data;
  },
};
</script>