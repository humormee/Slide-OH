import Card from "./Card";
import { lizard } from "../assets/images/lizard";

export default class Puzzle {
  // constructor(el, imageSrc, width, dimension = 3){
  //   this.imageSrc = lizard;
    
  // }
  constructor(canvas, img){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.imageSrc = lizard;
    this.emptyCard = {};
    this.setBoard();
    this.isSolved = false;
    this.img = img;
  }
 
  setBoard() {
    debugger
    this.cardsArray = new Array(3);
    //initialize cards Arr with x, y positions from 0,0 to 2,2
    for (let i = 0; i < 3; i++) {
      this.cardsArray[i] = new Array(2)
      for (let j = 0; j < 3; j++) {
        this.cardsArray[i][j] = {
          x: 2 - i,
          y: 2 - j
        };
      }
    }

    this.emptyCard.x = this.cardsArray[2][2].x;
    this.emptyCard.y = this.cardsArray[2][2].y;
    this.isSolved = false;
  }

  drawCards(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let cardSize = this.canvas.width / 3;

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        // debugger
        // let card = new Card(this.canvas, [i, j], cardSize, cardSize)
        let x = this.cardsArray[i][j].x;
        let y = this.cardsArray[i][j].y;
        if(i !== this.emptyCard.x || j !== this.emptyCard.y) {
          // debugger
          this.ctx.drawImage(this.img, x * cardSize, y * cardSize, cardSize, cardSize, i * cardSize, j * cardSize, cardSize, cardSize);
        }
      }
    }
    debugger
    let imageWidth = this.img.width;
    let imageHeight = this.img.height;
    const data = this.ctx.getImageData(0, 0, imageWidth, imageHeight);
  }

  findEmpty() {

  }

  findPosition(index) {

  }

}


// export default Canvas;