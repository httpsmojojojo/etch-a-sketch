const sketchPad = document.getElementById('sketchPad');
const gridSizeButton = document.getElementById('gridSizeButton');
const clearGridButton = document.getElementById('clearGridButton');
const deleteGridButton = document.getElementById('deleteGridButton');

function generateGrid(num) {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
    
    const squareSize = 960 / num; // Calculate the size of each square

    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            square.style.backgroundColor = randomColor;
        });

        sketchPad.appendChild(square);
    }
}

gridSizeButton.addEventListener('click', () => {
    let num;
    do {
        num = parseInt(prompt('Enter grid dimension (max 100):'), 10);
    } while (isNaN(num) || num < 1 || num > 100);
    
    generateGrid(num);
});

clearGridButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = '');
});

deleteGridButton.addEventListener('click', () => {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
});
