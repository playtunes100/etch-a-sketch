
createGrid(20);

let squares = document.querySelectorAll('.grid-col');
let gridSize = 16;
const colors = ['springgreen', 'steelblue', 'teal', 'tomato', 'turquoise', 'violet', 'whitesmoke', 'yellowgreen', 'white', 'red','orange','yellow','green','blue','indigo', 'black'];
let paintColor = '#000000';
let paintColorRandom = false;


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
        paintColorRandom = false;
        setColor('#ffffff');
    })
}

function setColorBlack(){
    document.querySelector('#black-button').addEventListener('click', event => {
        paintColorRandom = false;
        setColor('#000000');
    })
}

function setColorRandom(){
    document.querySelector('#random-button').addEventListener('click', event => {
        paintColorRandom = true;
    })
}

function draw(){
    squares.forEach( item => {
        item.addEventListener('pointerover', event => {
            if (paintColorRandom){
                let randomNum = Math.floor(Math.random() * (colors.length));
                let randomColor = colors[randomNum];
                setColor(randomColor);
            }
            event.currentTarget.style.backgroundColor = paintColor;
        })
    })
}


draw();
setColorWhite();
setColorBlack();
setColorRandom();