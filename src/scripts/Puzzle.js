import Card from "./Card";
import { lizard } from "../assets/images/lizard";
import { cute } from "../assets/images/cute"
export default class Puzzle {
 
  constructor(canvas, img){
    this.canvas = canvas;
    this.img = img;
    this.ctx = canvas.getContext("2d");
    this.imageSrc = lizard;
    this.emptyCard = new Card(img, canvas, [0, 0], [0, 0], true);
    
    this.cardsArray = this.setBoard();

    
    this.isSolved = false;
    
  }

  
 
  setBoard() {
    
    let cardsArray = new Array(3);
    //initialize cards Arr with x, y positions from 0,0 to 2,2
    for (let i = 0; i < 3; i++) {
      cardsArray[i] = new Array(2)
      for (let j = 0; j < 3; j++) {
        
        cardsArray[i][j] = new Card(this.img, this.canvas, [2 - i, 2 - j], [i, j])
        
      }
    }
    cardsArray[2][2] = this.emptyCard;
    return cardsArray;
  }

  drawCards(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // let cardSize = this.canvas.width / 3;

    debugger
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
       


        if(i !== this.emptyCard.x || j !== this.emptyCard.y) {
          this.cardsArray[i][j].drawCard();
         
        }
      }
    }
    
    let imageWidth = this.img.width;
    let imageHeight = this.img.height;
    const data = this.ctx.getImageData(0, 0, imageWidth, imageHeight);
  }

  switchCards(clickLoc) {
    let clickedCard = this.cardsArray[clickLoc.x][clickLoc.y];
    let emptyPosX = this.emptyCard.currentIndex[0];
    let emptyPosY = this.emptyCard.currentIndex[1];

    let isAdjacent = (Math.abs(clickLoc.x - emptyPosX) <= 1 && Math.abs(clickLoc.y - emptyPosY) <= 1)
    
    let isDiagonal = (Math.abs(clickLoc.x - emptyPosX) == 1 && Math.abs(clickLoc.y - emptyPosY) == 1)
    debugger
    if(isAdjacent && !isDiagonal){
      debugger
      
      let temp = clickLoc;
      this.cardsArray[emptyPosX][emptyPosY] = clickedCard;
      this.cardsArray[clickLoc.x][clickLoc.y] = this.emptyCard;
      
      this.emptyCard.currentIndex = [clickLoc.x, clickLoc.y];
      console.log("empty next to click yep")
      
    }
    this.drawCards();

  }

  isSolved(){
    return false;
  }

}


// export default Canvas;