<template>
  <div class="">
    <div v-if="loading">Loading...</div>
    <img :src="src" alt="Image" class="lightbox__image" :style="style" />
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
    window.addEventListener("resize", () => {
      console.log("Resize");
      this.resizeImage(image);
    });
    image.src = this.image;
  },
};
</script>
