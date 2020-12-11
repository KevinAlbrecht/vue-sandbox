<template>
  <div id="home-menu">
    <ul>
      <li class="category">
        <span class="category-title">Genres</span>
        <div class="content">
          <ul class="sub-category">
            <li v-for="genre in genres" :key="genre.id">
               <router-link
                :to="{
                  name: 'genre',
                  params: { genreName: toSlug(genre.title),genreId: genre.id },
                }"> 
								<span class="topic-title">{{ genre.title }}</span>
              </router-link> 
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import MoviesService from "../../../services/moviesService";
import Slugify from "../../../helpers/Slugify";

export default {
  methods: {
    toSlug: Slugify,
    async fetchCategories() {
      this.isLoading = true;
      const result = await MoviesService.getGenres();
      this.genres = result.data;
      this.isLoading = false;
    },
  },
  data: () => ({
    genres: [],
    isLoading: false,
  }),
  beforeMount() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
#home-menu {
  height: 100%;
  width: 260px;
  padding: 35px 0px 60px 20px;
  border-right: 1px solid #1976d240;
  position: fixed;
  background-color: white;
  z-index: 1;
}

#home-menu ul {
  padding: 0;
}

a {
  text-decoration: none;
}

ul li a:hover {
  text-decoration-color: green;
  text-decoration: underline;
}

.category-title {
  font-size: 1.17em;
  font-weight: 600;
  color: #34495e;
}
#home-menu ul .sub-category {
  padding-left: 20px;
}

.topic-title {
  font-size: 1.15em;
}
</style>