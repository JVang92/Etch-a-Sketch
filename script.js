const GRID_SIZE = 16;

const container = document.querySelector("#container");
const square = document.createElement("div"); //used to create each square instead of pasting in HTML



for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++){
    const square = document.createElement("div"); //used to create each square instead of pasting in HTML
    square.classList.add("square");
    container.appendChild(square);
}