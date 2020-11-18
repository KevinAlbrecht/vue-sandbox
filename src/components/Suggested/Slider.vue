<template>
  <div class="slider_main">
    <h2 class="title">{{ title }}</h2>
    <div class="slider_container">
      <span @click="slide(true)" class="arrow arrow-prev"><b></b></span>
      <div
        v-if="vMovies"
        :class="['slider_slide', inTransition ? 'in-transition' : '']"
        :style="{
          transform: sliderTransform,
        }"
      >
        <div
          class="box"
          :style="computeBoxWidth"
          v-for="movie in vMovies"
          :key="movie.id"
        >
          <router-link
            :to="{
              name: 'movie',
              params: { movieId: movie.id, movieName: movie.title },
            }"
          >
            <div class="img_container">
              <img v-once :src="computePosterUrl(movie.poster_path)" />
            </div>
          </router-link>
        </div>
      </div>
      <span @click="slide()" class="arrow arrow-next"><b></b></span>
    </div>
  </div>
</template>

<script>
// items count hardcoded for the moment
// 16.66666667 represent 100 / n =  where N = elements to show in slider -> 100 / 6  = 16.66666***
const itemRatio = 16.66666667;

export default {
  props: ["movies", "title"],
  data() {
    return {
      $_isInfinite: false,
      get slideUnity() {
        return 100;
      },
      vMovies: this.movies,
      inTransition: false,
      translate: 0,
      rawBoxPart: 20,
    };
  },
  methods: {
    computePosterUrl(path) {
      return `${process.env.VUE_APP_TMDB_IMG_URL}${path}`;
    },
    slide(isLeft = false) {
      if (this.inTransition === false) {
        if (this.$_isInfinite) {
          this.$_preReorder(isLeft);
          this.translate += isLeft ? -itemRatio : itemRatio;
        }
        setTimeout(() => {
          this.inTransition = true;
          isLeft
            ? (this.translate += this.slideUnity)
            : (this.translate -= this.slideUnity);
        }, 0);
        setTimeout(() => {
          this.inTransition = false;
          if (this.$_isInfinite) {
            this.translate = -this.slideUnity;
            this.$_reorder(isLeft);
          } else this.$_isInfinite = true;
        }, 700);
      }
    },
    $_preReorder(isLeft = false) {
      if (isLeft)
        this.vMovies.unshift(
          ...this.vMovies.splice(this.vMovies.length - 1, 1)
        );
      if (!isLeft) this.vMovies.push(...this.vMovies.splice(0, 1));
    },
    $_reorder(isLeft = false) {
      const moviesCount = this.vMovies.length;
      const itemsToReorder = Math.floor(moviesCount / 3);
      if (isLeft)
        this.vMovies.unshift(
          ...this.vMovies.splice(
            moviesCount - itemsToReorder + 1,
            itemsToReorder
          )
        );
      else this.vMovies.push(...this.vMovies.splice(0, itemsToReorder - 1));
    },
  },
  computed: {
    sliderTransform() {
      return `translateX(calc(${this.translate}% + ${Math.abs(this.translate)}px))`;
    },
    computeBoxWidth() {
      return `width: calc(${itemRatio}% - 10px + 5px);`;
    },
  },
};
</script>

<style>
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
  z-index: 1;
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
  line-height: 0;
}

.slider_main .slider_container .slider_slide.in-transition {
  transition: transform 700ms;
}

.slider_main .slider_container .slider_slide .box {
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