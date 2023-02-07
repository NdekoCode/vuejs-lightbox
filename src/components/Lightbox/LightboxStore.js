class LightboxStore {
  constructor() {
    this.state = {
      images: [],
      index: false,
    };
  }

  /**
   * Ajoute une image à notre Store et retourne l'index de l'image ajouter
   * @param {string} image
   * @returns
   */
  addImage(image) {
    return this.state.images.push(image);
  }
  /**
   * Permet d'ouvrir une lightbox
   * @param {string|int} index
   */
  open(index) {
    this.state.index = index - 1;
  }
}
export default new LightboxStore();
