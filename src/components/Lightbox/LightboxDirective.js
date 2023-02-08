import Vue from "vue";
import store from "./LightboxStore";
Vue.directive("lightbox", {
  bind(el) {
    const indexImage = store.addImage(el.getAttribute("href"));
    el.addEventListener("click", (e) => {
      e.preventDefault();
      // On doit ouvrir l'image et recuperer son attribut HREF
      store.open(indexImage);
    });
  },
  unbind(el) {
    store.remove(el.getAttribute("href"));
  },
});
