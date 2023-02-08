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
  next() {
    if (
      this.state.index < this.state.images.length &&
      this.state.images[this.state.index] !== undefined
    ) {
      this.state.index += 1;
    } else {
      this.state.index = 0;
    }
    console.log(this.state.images[this.state.index]);
  }
  prev() {
    if (this.state.index > 0) {
      this.state.index -= 1;
    } else {
      this.state.index = this.state.images.length - 1;
    }
    console.log(this.state.images[this.state.index]);
  }
}
export default new LightboxStore();
