<template>
  <div id="app">
    <LightBox></LightBox>
  </div>
</template>

<script>
import LightBox from "./components/Lightbox/LightBox";
export default {
  name: "App",
  components: {
    LightBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
