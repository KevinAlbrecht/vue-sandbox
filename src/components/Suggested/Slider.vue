<template>
  <div class="slider_main">
    <h2 class="title">{{ title }}</h2>
    <div class="slider_container">
      <span @click="goLeft()" class="arrow arrow-prev"><b></b></span>
      <div
        v-if="movies"
        class="slider_slide"
        :style="{ transform: `translateX(${translate}%)` }"
      >
        <div class="box" v-for="movie in movies" :key="movie.id">
          {{ movie.title }}
        </div>
      </div>
      <span @click="goRight()" class="arrow arrow-next"><b></b></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies", "title"],
  data() {
    return {
      translate: 0,
    };
  },

  methods: {
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
  background-color: #ffffff1a;
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

.slider_main .slider_container .arrow.arrow-prev b::before {
  content: "<";
}

.slider_main .slider_container .arrow.arrow-next {
  right: 0;
}

.slider_main .slider_container .arrow.arrow-next b::after {
  content: ">";
}

/* Slide */

.slider_main .slider_container .slider_slide {
  overflow-x: visible;
  padding: 10px 50px;
  white-space: nowrap;
  position: relative;
transition:transform 700ms;
}

.slider_main .slider_container .slider_slide .box {
  height: 160px;
  width: 33%;
  display: inline-block;
  margin-right: 5px;
  /* debug */
  background-color: white;
}
</style>