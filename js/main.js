
createGrid(20);

let squares = document.querySelectorAll('.grid-col');
let gridSize = 16;
let paintColor = '#000000';

function createGrid(gridSize){
    const gridContainer = document.querySelector(".grid-container");
    let counter = 1;
    for (let i = 0; i < gridSize; i++) {
        
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridRow.setAttribute("id", "row-"+i);
        gridContainer.appendChild(gridRow);
        for(let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("grid-col");
            square.setAttribute("id", "col-"+counter);
            gridRow.appendChild(square);
            counter += 1;
            
        }
    }
}

function setColor(newColor){
    paintColor = newColor;
}

function setColorWhite(){
    document.querySelector('#white-button').addEventListener('click', event => {
        setColor('#ffffff');
    })
}
function draw(){
    squares.forEach( item => {
        item.addEventListener('pointerover', event => {
            event.currentTarget.style.backgroundColor = paintColor;
        })
    })
}


draw();
setColorWhite();