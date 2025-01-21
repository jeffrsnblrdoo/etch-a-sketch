const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grids");

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });

    container.appendChild(div);
}
