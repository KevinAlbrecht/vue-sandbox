<template>
  <h1>product : {{ genreName + genreId }}</h1>
</template>
<script>
export default {
  props: ["genreName", "genreId"],
};
</script>