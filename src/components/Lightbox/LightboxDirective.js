import Vue from "vue";
import store from "./LightboxStore";
Vue.directive("lightbox", {
  bind(el) {
    const indexImage = store.addImage(el.getAttribute("href"));
    el.addEventListener("click", (e) => {
      e.preventDefault();
      store.state.index = store.state.images.findIndex(
        (image) => image === el.getAttribute("href")
      );
      console.log(store.state.images[store.state.index], indexImage);
      // On doit ouvrir l'image et recuperer son attribut HRF
      //   open(el.getAttribute("href"));
    });
  },
});
