const container = document.querySelector('.gridContainer');
const gridChangeBtn = document.querySelector('.gridChangeBtn');

const blackPenBtn = document.querySelector('.blackPen');
blackPenBtn.addEventListener('click', () => penMode = 'black');

const rainbowPenBtn = document.querySelector('.rainbowPen');
rainbowPenBtn.addEventListener('click', () => penMode = 'rainbow');

function changeColorToBlack(item) {
    item.style.backgroundColor = 'black';
}
function changeColorToRainbow(item) {
    let rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

    let randonColor = Math.floor(Math.random() * 7)
    item.style.backgroundColor = rainbowColors[randonColor]
}

var penMode = 'black';
function paintSquare(e) {
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

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");
        div.style.width = widhtPerSquare + "px";
        div.addEventListener("mouseover", paintSquare);

        container.appendChild(div);
    }
}

gridChangeBtn.addEventListener('click', () => {
    const userGridValue = prompt('How many squares do you want? (Max 100)');

    if (userGridValue > 100 || userGridValue < 0) {
        return "ERROR!";
    }
    
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    createGrid(userGridValue);
});

createGrid(4);