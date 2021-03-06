import "./styles/index.scss";
import Clock from './scripts/Clock';
import Puzzle from "./scripts/Puzzle";
import { findClick } from "./scripts/game";
import { cute } from "./assets/images/cute";
import { lizard } from "./assets/images/lizard";
import { new_panda } from "./assets/images/new_panda";
import { doggo } from "./assets/images/doggo";

function chooseImage(){
  const imgArr = [cute, lizard, new_panda, doggo];
  let pic = imgArr[Math.floor(Math.random()*imgArr.length)];
  
  let img = new Image();
  img.setAttribute(`src`, `data:image/jpg;base64, ${pic}`);
  window.img = img;
  img.onload = function() {
    
  }
  
}


document.addEventListener('DOMContentLoaded', () => {
  
  const clock = new Clock();
  const canvas = document.getElementById('puzzle');
  const ctx = canvas.getContext("2d");
  const reset = document.getElementById("reset");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;

  

  chooseImage();

  window.reset = function reload() {
    chooseImage();
    window.puzzle.setBoard();
    window.clock.reset();
  }

  let puzzle = new Puzzle(canvas, window.img);
  puzzle.drawCards();
  window.puzzle = puzzle;
  window.clock = clock;

  canvas.addEventListener('click', function(e) {

    findClick(e);

  }, false)


  reset.addEventListener('click', function(e) {
    chooseImage();
    window.puzzle.setBoard();
    window.clock.reset();
    
  }, false)

  

}) 
