<template>
  <div class="lightbox" v-if="image" @click="close">
    <LightboxImage :image="image" />
    <div class="lightbox__close-container">
      <button class="lightbox__close" @click.prevent="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Close</title>
          <path
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="25"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      </button>
    </div>
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

<style lang="scss" src="./lightbox.scss">
</style>