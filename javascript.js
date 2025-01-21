const container = document.querySelector(".container");

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

createGrid(16);
