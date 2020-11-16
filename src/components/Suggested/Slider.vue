<template>
  <div class="slider_main">
    <h2 class="title">{{ title }}</h2>
    <div class="slider_container">
      <span @click="goLeft()" class="arrow arrow-prev"><b></b></span>
      <div
        v-if="movies"
        class="slider_slide"
        :style="{
          transform: `translateX(calc(${translate}% + ${Math.abs(translate)}px))`,
        }"
      >
        <div
          class="box"
          v-for="movie in movies"
          :key="movie.id"
        >
          <router-link
            :to="{
              name: 'movie',
              params: { movieId: movie.id, movieName: movie.title },
            }"
          >
            <div class="img_container">
              <img v-once :src="posterUrl(movie.poster_path)" />
            </div>
          </router-link>
        </div>
      </div>
      <span @click="goRight()" class="arrow arrow-next"><b></b></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies", "title"],
  computed: {
    vMovies: {
      get() {
        const val = [...this.movies];
        const l = Math.floor(val.length / 3);
        val.unshift(...val.splice(val.length - l, l));
        return val;
      },
    },
  },
  data() {
    return {
      translate: 0,
      $_vzdMovies: [],
      rawBoxPart: 20,
    };
  },

  methods: {
    posterUrl(path) {
      return `${process.env.VUE_APP_TMDB_IMG_URL}${path}`;
    },
    goLeft() {
      this.translate += 100;
    },
    goRight() {
      this.translate -= 100;
    },
  },
};
</script>

<style>
.slider_main {
}

.slider_main h2.title {
  color: white;
  padding-left: 50px;
}

.slider_main .slider_container {
  position: relative;
}

/* ARROW */

.slider_main .slider_container .arrow {
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  width: 50px;
  background-color: rgba(20, 20, 20, 0.5);
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.slider_main .slider_container .arrow b {
  display: block;
  align-self: center;
  height: 20px;
  line-height: 20px;
}

.slider_main .slider_container .arrow.arrow-prev {
  left: 0;
}

.slider_main .slider_container .arrow.arrow-next {
  right: 0;
}

.slider_main .slider_container .arrow b::before,
.slider_main .slider_container .arrow b::after {
  color: white;
  font-weight: 700;
  font-size: 25px;
}

.slider_main .slider_container .arrow.arrow-prev b::before {
  content: "<";
}

.slider_main .slider_container .arrow.arrow-next b::after {
  content: ">";
}

/* Slide */

.slider_main .slider_container .slider_slide {
  overflow-x: visible;
  padding: 0 50px;
  white-space: nowrap;
  position: relative;
  transition: transform 700ms;
  line-height: 0;
}

.slider_main .slider_container .slider_slide .box {
  width: calc(16.66666667% - 10px + 5px);
  display: inline-block;
  margin-right: 5px;
}

.slider_main .slider_container .slider_slide .box .img_container {
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  padding-top: 150%;
}

.slider_main .slider_container .slider_slide .box .img_container img {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>