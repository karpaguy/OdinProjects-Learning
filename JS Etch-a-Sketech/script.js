function changeColorToBlack() {
    this.classList.toggle("gridUnitBlack");
    // this.style.backgroundColor = 'black';
}

function changeColorToRainbow() {
    let rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];

    let randowColor = Math.floor(Math.random() * 7)
    console.log(randowColor);
    this.style.backgroundColor = rainbowColors[randowColor]
}

// The penMode is a prototype to choose the color of background.
// Kinda complicated, but it helps to add a new pen mode easliy.

// var penMode = 'black';
// function paintSquare(e) {
//     console.log('WA');

//     switch (penMode) {
//         case 'black':
//             changeColorToBlack();
//         case 'rainbow':
//             changeColorToRainbow();
//     };
// }

function createGrid(num) {
    // 512 comes from the container size. Can be changed to a variable if desired.
    let widhtPerSquare = 512 / num; 
    num = num * num;

    console.log(widhtPerSquare);

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");

        div.style.width = widhtPerSquare + "px";

        div.addEventListener("mouseover", changeColorToRainbow);

        console.log("grid!");
        container.appendChild(div);
    }
}

const container = document.querySelector('.gridContainer');
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