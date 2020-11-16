<template>
  <div id="home_page">
    <home-menu></home-menu>
    <suggested></suggested>
  </div>
</template>

<script>
import HomeMenu from "../components/layout/HomeMenu/HomeMenu";
import Suggested from "../components/Suggested/Suggested";
export default {
  components: { HomeMenu, Suggested },
};
</script>
<style scoped>
</style>