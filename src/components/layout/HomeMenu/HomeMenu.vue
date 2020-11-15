<template>
  <div id="home-menu">
    <ul>
      <li class="category">
        <span class="category-title">People's choice</span>
        <div class="content">
          <ul class="sub-category">
            <li>
              <router-link :to="'top-rated'">
                <span class="topic-title">Top Rated</span>
              </router-link>
            </li>
            <li>
              <router-link :to="'popular'">
                <span class="topic-title">Popular</span>
              </router-link>
            </li>
            <li>
              <router-link :to="'latest'">
                <span class="topic-title">Latest</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="category">
        <span class="category-title">Genres</span>
        <div class="content">
          <ul class="sub-category">
            <li v-for="genre in genres" :key="genre.id">
              <router-link
                :to="{
                  name: 'genre',
                  params: { genreName: genre.name, genreId: genre.id },
                }"
              >
                <span class="topic-title">{{ genre.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import ProductService from "../../../services/productService";

export default {
  methods: {
    async fetchCategories() {
      this.isLoading = true;
      const result = await ProductService.getGenres();
      console.log("ok", result);
      this.genres = result;
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
}
#home-menu ul .sub-category {
  padding-left: 20px;
}

.topic-title {
  font-size: 1.15em;
}
</style>