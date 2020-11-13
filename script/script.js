function startGame(){

    const grid = 16;

    createGrid(grid);

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            buttonClicked = button.id;
            const squares = document.querySelectorAll('.square');


            if (buttonClicked == "black-btn"){

                squares.forEach((squares) => {
                    squares.removeEventListener('mouseover', eraserColour);
                    squares.removeEventListener('mouseover', rgbColour);
                    squares.removeEventListener('mouseover', selectedColour);
                    squares.addEventListener('mouseover', blackColour);
                })

            } else if (buttonClicked == "rgb-btn"){

                squares.forEach((squares) => {
                    squares.removeEventListener('mouseover', blackColour);
                    squares.removeEventListener('mouseover', eraserColour);
                    squares.removeEventListener('mouseover', selectedColour);
                    squares.addEventListener('mouseover', rgbColour);
                })

            } else if (buttonClicked == "eraser-btn"){

                squares.forEach((squares) => {
                    squares.removeEventListener('mouseover', blackColour);
                    squares.removeEventListener('mouseover', rgbColour);
                    squares.removeEventListener('mouseover', selectedColour);
                    squares.addEventListener('mouseover', eraserColour);
                })
                
            } else if (buttonClicked == "colourSelect-btn"){

                squares.forEach((squares) => {
                    squares.removeEventListener('mouseover', blackColour);
                    squares.removeEventListener('mouseover', rgbColour);
                    squares.removeEventListener('mouseover', eraserColour);
                    squares.addEventListener('mouseover', selectedColour);
                })
                
            } else if (buttonClicked == "clear-btn"){

                squares.forEach((square) => {
                    square.style.background = "white"
                })

            } else if (buttonClicked == "size-btn"){
                squares.forEach((squares) => {
                    squares.style.background = "white";
                })
                changeGrid();

            }

        })
    })

}

function changeGrid(){

    gridArea = 300;

    const size = document.getElementById("grid-size").value;
    const grid = document.getElementById("main_grid");
    grid.innerHTML = '';
    createGrid(size);

    const squares = document.querySelectorAll('.square');
    var calcPad = Math.floor(gridArea/size);

    var pad = calcPad.toString() + "px";

    squares.forEach((square) => {
        square.style.padding = pad;
    })

}

function createGrid(size){

    var i;

    const main_grid = document.querySelector('#main_grid');

    var columns = "";

    for (i = 0; i<size; i++){
        columns += "auto";
        if (i != size-1){
            columns += " ";
        }
    }

    main_grid.style.gridTemplateColumns = columns;


    for (i = 0; i<Math.pow(size, 2); i++){

        const square = document.createElement('div');
        square.classList.add('square');
        main_grid.appendChild(square);

    }
}

function getRandomColour(){
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i<6; i++){
        colour += letters[Math.floor(Math.random()*16)];
    }
    return colour;
}

function selectedColour() {

    const colour = document.getElementById("input-colour").value;
    this.style.background = colour;
}

function eraserColour() {
    this.style.background = "white";
}

function blackColour() {
    this.style.background = "black";
}

function rgbColour() {
    this.style.background = getRandomColour();
}

startGame();
