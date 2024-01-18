const container = document.querySelector('.gridContainer');
const gridChangeBtn = document.querySelector('.gridChangeBtn');

// Adding Pens Section -•
// Add the changeColorFunctions and Pens here. Remeber to add a case for the new pen in the paintSquare function.
const blackPenBtn = document.querySelector('.blackPen');
blackPenBtn.addEventListener('click', () => penMode = 'black');

const rainbowPenBtn = document.querySelector('.rainbowPen');
rainbowPenBtn.addEventListener('click', () => penMode = 'rainbow');

const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', () => penMode = 'eraser');

function changeColorToBlack(item) {
    item.style.backgroundColor = 'black';
}
function changeColorToRainbow(item) {
    let rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

    let randonColor = Math.floor(Math.random() * 7)
    item.style.backgroundColor = rainbowColors[randonColor]
}
function changeColorToWhite(item) {
    item.style.backgroundColor = 'white';
}

var penMode = 'black';
function paintSquare(e) {
    switch (penMode) {
        case 'black':
            changeColorToBlack(this);
            break;
        case 'rainbow':
            changeColorToRainbow(this);
            break;
        case 'eraser':
            changeColorToWhite(this);
    };
}

// Adding Pens Section -•

function createGrid(sizeDesired) {
    // 512 comes from the container size. Can be changed to a variable if desired.
    let widhtPerSquare = 512 / sizeDesired; 
    sizeDesiredArea = sizeDesired ** 2;

    for (let i = 0; i < sizeDesiredArea; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");
        div.style.width = widhtPerSquare + "px";
        div.addEventListener("mouseover", paintSquare);

        container.appendChild(div);
    }
}

gridChangeBtn.addEventListener('click', () => {
    const userGridValue = prompt('How many squares do you want? (Max 100)');

    if (userGridValue > 100 || userGridValue < 0) { return "ERROR!" };
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    createGrid(userGridValue);
});

// Default grid is 4x4.
createGrid(4);