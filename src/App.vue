<template>
  <div id="app">
    <div class="lightbox__container">
      <div class="lightbox__item" v-for="(item, key) in 12" :key="key">
        <a
          :href="`https://loremflickr.com/1200/900/futurama?lock=${item}`"
          v-lightbox
        >
          <img
            :src="`https://loremflickr.com/200/200/futurama?lock=${item}`"
            alt="Image"
          />
        </a>
      </div>
    </div>
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
