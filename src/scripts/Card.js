import { lizard } from "../assets/images/lizard";

export default class Card {
  constructor(img, canvasEl, currentIndex, baseIndex) {
    debugger
    this.img = img;
    this.isEmtpy = false;
    this.canvasEl = canvasEl;
    this.ctx = canvasEl.getContext("2d")
    this.currentIndex = currentIndex;
    this.baseIndex = baseIndex;
    this.size = canvasEl.width / 3;

    let el = this.createCard();
    this.canvasEl.appendChild(el);


  }

  createCard() {
    // this.canvasEl.appendChild()'
    // debugger
    const cardDiv = document.createElement('div');
    cardDiv.style.backgroundSize = `${this.width}px ${this.height}px`;
    cardDiv.style.border = '1px solid white';
    cardDiv.style.position = 'absolute';
    return cardDiv;
  }

  drawCard() {
    let size = this.size
    let baseX = this.baseIndex[0];
    let baseY = this.baseIndex[1];
    let i = this.currentIndex[0];
    let j = this.currentIndex[1];
    debugger
    this.ctx.drawImage(this.img, i * size, j * size, size, size, baseX * size, baseY * size, size, size);
  }
}