import Vue from "vue";
import store from "./LightboxStore";
Vue.directive("lightbox", {
  bind(el) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      store.state.image = el.getAttribute("href");
      console.log(store.state);
      // On doit ouvrir l'image et recuperer son attribut HRF
      //   open(el.getAttribute("href"));
    });
  },
});
