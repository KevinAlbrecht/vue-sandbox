<template>
  <div class="products-content">
    <main class="grid">
      <article v:for=""></article>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [],
    isLoading: false,
  }),
  methods: {
    fetchProducts() {
      this.isLoading = true;
      this.isLoading = false;
    },
  },
  beforeMount() {
    this.fetchProducts();
  },
};
</script>

<style>
.products-content {
  width: 100%;
  height: 100%;
}
</style>