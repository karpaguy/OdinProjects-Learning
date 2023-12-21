function changeColor() {
    // this.classList.toggle("gridUnitBlack");
    this.style.backgroundColor = 'black';
}

function createGrid(num) {
    num = num * num;

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");

        div.addEventListener("mouseover", changeColor);

        console.log("grid!");
        container.appendChild(div);
    }
}

const container = document.querySelector('.container');
const gridChangeBtn = document.querySelector('.gridChangeBtn')

gridChangeBtn.addEventListener('click', () => {
    const userGridValue = prompt('How many squares do you want? (Max 100)');
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    createGrid(userGridValue);
});

createGrid(16);