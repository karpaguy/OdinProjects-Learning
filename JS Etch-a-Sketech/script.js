function changeColor(e) {
    this.classList.toggle("gridUnitBlack");
    // this.style.backgroundColor = 'black';
}

function createGrid(num) {
    // 512 comes from the container size. Can be changed to a variable if desired.
    let widhtPerSquare = 512 / num; 
    num = num * num;

    console.log(widhtPerSquare)

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");

        div.style.width = widhtPerSquare + "px";

        div.addEventListener("mouseover", changeColor);

        console.log("grid!");
        container.appendChild(div);
    }
}

const container = document.querySelector('.container');
const gridChangeBtn = document.querySelector('.gridChangeBtn');

gridChangeBtn.addEventListener('click', () => {
    const userGridValue = prompt('How many squares do you want? (Max 100)');

    if (userGridValue <= 100 && userGridValue > 0) {
        while (container.firstChild) {
            container.removeChild(container.lastChild)
        }
        createGrid(userGridValue);
    }
});

createGrid(4);