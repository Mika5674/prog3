
//! Requiring modules  --  START
var Grass = require("./modules/grass.js");
var Xotaker = require("./modules/xotaker.js");
var Gishatich = require("./modules/gishatich.js");
var Bomber = require("./modules/bomber.js");
var Vulcanum = require("./modules/vulcanum.js");
let random = require('./modules/random');
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = [];
xotakerArr = [];
gishatichArr = [];
bomberArr = [];
vulcanumArr = [];
lavaArr = [];
qarArr = [];
matrix = [];


grassHashiv = 0;
xotakerHashiv = 0;
gishatichHashiv = 0;
bomberHashiv = 0;
vulcanumHashiv = 0;
lavaHashiv = 0;
qarHashiv = 0;
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grass, xotaker, gishatich, bomber, vulcanum) {
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
    for (let i = 0; i < bomber; i++) {
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
matrixGenerator(30, 30, 30, 10, 3, 4);
//! Creating MATRIX -- END




//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new Xotaker(x, y);
                xotakerArr.push(grassEater);
                xotakerHashiv++;
            } 
            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var bomber = new Bomber(x, y);
                bomberArr.push(bomber);
            bomberHashiv++;
            } 
            else if (matrix[y][x] == 5) {
                var vulcanum = new Vulcanum(x, y);
                vulcanumArr.push(vulcanum);
                vulcanumHashiv++;
            } 
        }
    }
}
creatingObjects();


var multiply = 0;

function game() {

var season;


if  (multiply == 100){
    multiply = 0;
}
if (multiply <= 25) {
    season = "Spring";
}
else if (multiply > 25 && multiply <= 50) {
    season = "Summer";
}
else if (multiply > 50 && multiply <= 75) {

    season = "Autumn";
}
else if (multiply > 75 && multiply <= 100) {
    season = "Winter";
}

multiply++;

if (grassArr[0] !== undefined && season == "Winter") {
    for (var i in grassArr) {
        grassArr[i].multWinter();
    }
}
else{
    for (var i in grassArr) {
        grassArr[i].mult();
    }
}

if (xotakerArr[0] !== undefined && season == "Winter") {
    for (var i in xotakerArr) { 
        xotakerArr[i].moveWinter();
        xotakerArr[i].eat();
        xotakerArr[i].die();
    }
}
else{
    for (var i in xotakerArr) { 
        xotakerArr[i].move();
        xotakerArr[i].eat();
        xotakerArr[i].mult();
        xotakerArr[i].die();
    } 
}

if (gishatichArr[0] !== undefined && season == "Winter") {
    for (var i in gishatichArr) {
        gishatichArr[i].moveWinter();
        gishatichArr[i].eat();
        gishatichArr[i].die();
    }
}
else{
    for(var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mult();
        gishatichArr[i].die();
    }
}
if (bomberArr[0] !== undefined) {
    for (var i in bomberArr) {
        bomberArr[i].move();
        bomberArr[i].clear();
    }
}
if (vulcanumArr[0] !== undefined) {
    for (var i in vulcanumArr) { 
        vulcanumArr[i].qaranal();
        vulcanumArr[i].mult();
    }
}

    //! Object to send
    let sendData = {
        season: season,
        matrix: matrix,
        grassCounter: grassHashiv,
        xotakerCounter: xotakerHashiv,
        gishatichCounter: gishatichHashiv,
        bomberCounter: bomberHashiv,
        vulcanumCounter: vulcanumHashiv,
        lavaCounter: lavaHashiv,
        qarCounter: qarHashiv
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 300);