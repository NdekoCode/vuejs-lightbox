<template>
  <div id="app">
    <a
      :href="`https://loremflickr.com/1200/900/futurama?lock=${item}`"
      v-lightbox
      v-for="(item, key) in 9"
      :key="key"
    >
      <img
        :src="`https://loremflickr.com/150/150/futurama?lock=${item}`"
        alt="Image"
      />
    </a>
    <Lightbox></Lightbox>
  </div>
</template>

<script>
import Lightbox from "./components/Lightbox/Lightbox";
export default {
  name: "App",
  components: {
    Lightbox,
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
