const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "grid");

    container.appendChild(div);
}
