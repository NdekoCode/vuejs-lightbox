<template>
  <div class="lightbox" v-if="image" @click="close">
    <transition name="lightbox-fade">
      <!-- A chaque fois que la valeur de l'image change il considere que il y a un changement de composant du coup il créer un nouveau composant et donc une nouvelle image, ce qui nous fait un nouveau chargement  -->
      <LightboxImage :image="image" :key="image" />
    </transition>
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
    <div class="lightbox__btn-container" @click.stop>
      <button class="lightbox__btn lightbox__prev" @click.prevent="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Chevron Back</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="25"
            d="M328 112L184 256l144 144"
          />
        </svg>
      </button>
      <button class="lightbox__btn lightbox__next" @click.prevent="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Chevron Forward</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="25"
            d="M184 112l144 144-144 144"
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
      console.log("Lol");
      store.state.index = false;
    },
    next() {
      store.next();
    },
    prev() {
      store.prev();
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