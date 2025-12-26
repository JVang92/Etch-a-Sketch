const DEFAULT_GRID_SIZE = 16;


const gridAmountDisplay = document.getElementById("current_amount");
const button = document.getElementById("grid_choice");
const currentAmount = document.getElementById("grid_amount");
const colorCheckBox = document.getElementById("random_color");
const container = document.querySelector("#container");
const hoverColor = "hsl(12, 2%, 40%)";





button.addEventListener("click", () => createGrid(promptAmount()));
colorCheckBox.addEventListener("click", () => console.log(isChecked()));

createGrid(DEFAULT_GRID_SIZE); //create and display the default grid



function createGrid(size) {
    container.innerHTML = ''; // clear existing grid
    
    // calculate size of each square based on the 600px container
    const squareSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        // set width/height dynamically so they always fit the container
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("pointerover", () => {
            if (colorCheckBox.checked) {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = hoverColor;
            }
        });
        container.appendChild(square);
    }
    gridAmountDisplay.innerText = "Current Grid Amount: " + size + " X " + size;
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

function getRandomColor() { // return random hex color
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function isChecked(){
    return colorCheckBox.checked;
}