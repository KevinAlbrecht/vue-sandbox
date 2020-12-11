<template>
	<div id="movies_container">
    <home-menu></home-menu>
		<router-view></router-view>
  </div>
</template>

<script>
import HomeMenu from "../components/layout/HomeMenu/HomeMenu";
export default {
 components: { HomeMenu },
}
</script>

<style>

</style>