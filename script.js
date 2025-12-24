const GRID_SIZE = 16;
const DARKNESS_SUBTRACT = 10;

const gridAmountDisplay = document.getElementById("current_amount");
const button = document.getElementById("grid_choice");
const currentAmount = document.getElementById("grid_amount");
const container = document.querySelector("#container");




button.addEventListener("click", () => changeGrid());

for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++){
    const square = document.createElement("div"); // used to create each square instead of pasting in HTML
    square.classList.add("square");


    square.addEventListener("pointerover", function(e) { // when mouse goes over a square, it is filled in
        square.classList.add("hovered");
        console.log(square.classList);
    })

    
    
    container.appendChild(square); // add squares in container div

}

function changeGrid(){
    let num = promptAmount();
    const allSquares = document.querySelectorAll(".square"); // selects all instances of square into a node list.

    console.log("button pressed");
    allSquares.forEach(square => {
        square.remove();
    })



    for(let i = 0; i < num * num; i++){
    const square = document.createElement("div"); // used to create each square instead of pasting in HTML
    square.classList.add("square");
    //square.textContent = i; debug purposes

    square.addEventListener("pointerover", function(e) { // when mouse goes over a square, it is filled in
        square.classList.add("hovered");
    })
    container.appendChild(square); // add squares in container div
}
    
    container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)"; // reformat grid 
    gridAmountDisplay.innerText = "Current Grid Amount: " + num + " X " + num; // updates the text above gird


}

function promptAmount(){
    let inRange = false;
    let num = prompt("Enter a new grid number (1-100)");

    while(!inRange){
        if(num <= 100 && num > 0){
            inRange = true;
        }
        else{
            num = prompt("Invalid Range. Please enter a new grid number (1-100)");
        }
    }

    return num;

}