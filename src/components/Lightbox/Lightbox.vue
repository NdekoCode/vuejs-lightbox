<template>
  <div class="lightbox" v-if="image" @click="close">
    <LightboxImage :image="image" />
    <button class="lightbox__close" @click.prevent="close"></button>
  </div>
</template>

<script>
import "./LightboxDirective";
import LightboxImage from "./LightboxImage";
import store from "./LightboxStore";
export default {
  name: "LightBox",
  data() {
    return {
      state: store.state,
    };
  },
  methods: {
    close() {
      store.state.index = false;
    },
  },
  components: { LightboxImage },
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