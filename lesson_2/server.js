document.getElementById();
//! Requiring modules  --  START
var Grass = require("./modules/grass.js");
var Xotaker = require("./modules/xotaker.js");
var Gishatich = require("./modules/gishatich.js");
var Clearer = require("./modules/clearer.js");
var Vulcanum = require("./modules/vulcanum.js");
let random = require('./modules/random');
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
xotakerArr = [];
gishtichArr = [];
clearerArr = [];
vulcanumArr = [];
matrix = [];
grassHashiv = 0;
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grass, xotaker, gishatich, clearer, vulcanum) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < xotaker; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < clearer; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < vulcanum; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(30, 10, 10, 10, 10, 10);
//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new Xotaker(x, y);
                xotakerArr.push(grassEater);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
        }
    }
}
creatingObjects();

function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mult();
        }
    }
    if (xotakerArr[0] !== undefined) {
        for (var i in xotakerArr) {
            xotakerArr[i].eat();
            xotakerArr[i].move();
            xotakerArr[i].mult();
            xotakerArr[i].die();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000);