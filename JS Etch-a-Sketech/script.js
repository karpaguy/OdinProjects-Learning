function changeColor() {
    this.classList.toggle("gridUnitBlack");
    // this.style.backgroundColor = 'black';
}

function createGrid(num) {
    let value = String(512 / num);
    num = num * num;

    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add("gridUnit");

        this.style.width = value;

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

createGrid(4);

/*
Idea 1
GridItem widht needs to be 512 divided by the number passed as an argument on createGrid.

Idea 2
Make it using div rows instead of placing each div individually.
For example, if it is createGrid(16), it will create 16 containers, each with 16 divs.
They will be placed one after another in the proprer way.
So when the flex-grow happens, maybe it will work.  
*/