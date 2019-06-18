
//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let bomberCountElement = document.getElementById('bomberCount');
    let vulcanumCountElement = document.getElementById('vulcanumCount');
    let lavaCountElement = document.getElementById('lavaCount');
    let qarCountElement = document.getElementById('qarCount');
    let seasonElement = document.getElementById('season');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable

        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.xotakerCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        bomberCountElement.innerText = data.bomberCounter;
        vulcanumCountElement.innerText = data.vulcanumCounter;
        lavaCountElement.innerText = data.lavaCounter;
        qarCountElement.innerText = data.qarCounter;
        seasonElement.innerText = data.season;


        //! Every time it creates new Canvas woth new matrix size

        createCanvas(matrix[0].length * side, matrix.length * side)

        //! clearing background by setting it to new grey color

        background('#acacac');

        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#a05901');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 6) {
                    fill('orange');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 7) {
                    fill('grey');
                    rect(j * side, i * side, side, side);
                }
            }
            
        }
        if (data.season == "Autumn" || data.season == "Winter") {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("#cea210");
                        rect(j * side, i * side, side, side);
                    }
                }
            }     
        }
        if (data.season == "Winter") {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 0) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    }
                }
            }     
        }
    }
}