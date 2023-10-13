
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

createGrid(20);