<template>
  <h1>product : {{ productName }}</h1>
</template>
<script>
export default {
  computed: {
    productName() {
      return this.$route.params.id;
    },
  },
};
</script>