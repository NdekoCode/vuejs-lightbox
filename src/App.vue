<template>
  <div id="app">
    <a href="https://loremflickr.com/800/600/futurama?lock=1" v-lightbox>
      <img src="https://loremflickr.com/150/150/futurama?lock=1" alt="Image" />
    </a>
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
