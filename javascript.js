const container = document.querySelector(".container");
const button = document.querySelector("button");

let gridSizeBackup = 16;
createGrid(gridSizeBackup);

function createGrid(size) {
    container.innerHTML = "";
    const totalCells = size * size;
    const cellSize = container.clientWidth / size;

    for (let i = 0; i < totalCells; i++) {
        const grid = document.createElement("div");
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "#EEEEEE";
        });
        grid.className = "grids";
        grid.style.width = `${cellSize}px`;
        grid.style.height = `${cellSize}px`;
        container.appendChild(grid);
    }
}

button.addEventListener("click", () => {
    let gridSize = prompt("Enter the size of grid that you want: (MAX: 100)");

    if (gridSize <= 100 && gridSize) {
        gridSizeBackup = gridSize;
        createGrid(gridSize);
    } else {
        createGrid(gridSizeBackup);
    }
});
