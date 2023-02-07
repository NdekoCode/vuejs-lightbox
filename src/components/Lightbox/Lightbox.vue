<template>
  <div class="lightbox" v-if="image">
    <img :src="image" alt="Image" />
  </div>
</template>

<script>
import "./LightboxDirective";
import store from "./LightboxStore";
export default {
  name: "LightBox",
  data() {
    return {
      state: store.state,
    };
  },
  computed: {
    url() {
      return this.state.images[this.state.index] || "??";
    },
    image() {
      if (this.state.index !== false) {
        return this.state.images[this.state.index];
      }
      return null;
    },
  },
};
</script>

<style lang="scss" src="./lightbox.scss" scoped>
</style>