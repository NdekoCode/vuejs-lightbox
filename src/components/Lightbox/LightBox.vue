<template>
  <div>
    <a
      :href="`https://loremflickr.com/800/600/futurama?lock=${item}`"
      v-lightbox
      v-for="(item, key) in 9"
      :key="key"
    >
      <img
        :src="`https://loremflickr.com/150/150/futurama?lock=${item}`"
        alt="Image"
      />
    </a>
    {{ url }}
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
  },
};
</script>

<style lang="scss" scoped>
</style>