<template>
  <div @click.stop>
    <div v-if="loading" class="lightbox__loading"></div>
    <transition name="lightbox-fade">
      <!-- La clé à observer c'est "src",dès que "src" est disponible il faut que tu lance l'animation  -->
      <img
        :src="src"
        :alt="!loading ? 'Image' : ''"
        class="lightbox__image"
        :style="style"
        :key="src"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "LightboxImage",
  props: {
    image: {
      type: String,
    },
  },
  data() {
    return {
      // Va permettre de savoir si l'image est deja charger
      loading: true,
      src: false,
      style: {},
    };
  },
  methods: {
    resizeImage(image) {
      let width = image.width;
      let height = image.height;
      const heightScreen = window.innerHeight;
      const widthScreen = window.innerWidth;
      if (width > widthScreen || height > heightScreen) {
        let ratio = width / height;
        let ratioScreen = widthScreen / heightScreen;
        // Si le ratio de l'image est superieur au ratio de la fenetre, cela veut dire que c'est que la largeur de l'image qui depasse alors il faut fixer la largeur de l'image à la largeur de la fenetre Ensuite on doit faire en sorte que la hauteur garde le systeme de ratio par rapport à la nouvelle largeur de l'image
        if (ratio > ratioScreen) {
          width = widthScreen - 50;
          height = width / ratio;
        } else {
          height = heightScreen - 50;
          width = height * ratio;
        }
        this.style = {
          width: width + "px",
          height: height + "px",
          top: ((heightScreen - height) * 0.5) / 2 + "px",
          left: ((widthScreen - width) * 0.5) / 2 + "px",
        };
      }
    },
  },
  mounted() {
    // Dès que le composant est monter il va falloir que je recupère les dimensions de l'image avant de l'inserer dans le DOM.
    let image = new Image(); // Notre image
    image.onload = () => {
      this.resizeImage(image);
      this.loading = false;
      this.src = this.image;
    };
    this.resizeEvent = () => {
      this.resizeImage(image);
    };
    // Quand on redimensionne la fenetre on recalcule alors la taille de l'image
    window.addEventListener("resize", this.resizeEvent);
    image.src = this.image;
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
};
</script>
