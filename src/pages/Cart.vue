<template><h1>Cart</h1></template>
<script>
export default {
  computed: {
    productName() {
      return this.$route.params.id;
    },
  },
};
</script>