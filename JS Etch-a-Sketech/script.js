function changeColorToBlack(item) {
    item.classList.toggle("gridUnitBlack");
    // this.style.backgroundColor = 'black';
}

function changeColorToRainbow(item) {
    let rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

    let randowColor = Math.floor(Math.random() * 7)
    console.log(randowColor);
    item.style.backgroundColor = rainbowColors[randowColor]
}

var penMode = 'black';
function paintSquare(e) {
    console.log(penMode);

    switch (penMode) {
        case 'black':
            changeColorToBlack(this);
            break
        case 'rainbow':
            changeColorToRainbow(this);
            break
    };
}

function createGrid(num) {
    // 512 comes from the container size. Can be changed to a variable if desired.
    let widhtPerSquare = 512 / num; 
    num = num * num;

    console.log(widhtPerSquare);

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");

        div.style.width = widhtPerSquare + "px";

        div.addEventListener("mouseover", paintSquare);

        console.log("grid!");
        container.appendChild(div);
    }
}

// function changePen(color) {
//     penMode = color;
//     console.log(penMode)
// }

const container = document.querySelector('.gridContainer');
const gridChangeBtn = document.querySelector('.gridChangeBtn');

const blackPenBtn = document.querySelector('.blackPen');
blackPenBtn.addEventListener('click', changePen('black'));

const rainbowPenBtn = document.querySelector('.rainbowPen');
rainbowPenBtn.addEventListener('click', changePen('rainbow'));

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