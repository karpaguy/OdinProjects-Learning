const container = document.querySelector('.container');

function changeColor() {
    // this.classList.toggle("gridUnitBlack");
    this.style.backgroundColor = 'black';
}

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");

        div.addEventListener("mouseover", changeColor);

        console.log("grid!");
        container.appendChild(div);
    }
}

createGrid(256);