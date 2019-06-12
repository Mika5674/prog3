var matrix = fillmatrix(30, 30)

function fillmatrix(a, b) {
    var mx = []
    for (var i = 0; i < a; i++) {
        mx.push([])
        for (var j = 0; j < b; j++) {
            mx[i].push(Math.floor(Math.random() * 3.03))
        }
    }

    return mx
}


for(var i = 0; i < 5; i++){
	var y = Math.floor(Math.random()*29)
	var x = Math.floor(Math.random()*29)
	matrix[y][x] = 4
}
for(var i = 0; i < 2; i++){
	var y = Math.floor(Math.random()*29)
	var x = Math.floor(Math.random()*29)
	matrix[y][x] = 5
}

var side = 30;

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vulcanumArr = [];
var lavaArr = [];
var qarArr = [];
var clearerArr = [];


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        if (matrix[y][x] == 3) {
            var gt = new Gishatich(x, y)
            gishatichArr.push(gt)
        }
        if (matrix[y][x] == 5) {
            var clearer = new Clearer(x, y)
            clearerArr.push(clearer)
        }
        if (matrix[y][x] == 4) {
            var vl = new Vulcanum(x, y)
            vulcanumArr.push(vl)
        }
        
        if (matrix[y][x] == 6) {
            var lava = new Lava(x, y)
            lavaArr.push(lava)
        }
        if (matrix[y][x] == 7) {
            var qar = new Qar(x, y)
            qarArr.push(qar)
        }
        
    }
}
console.log(grassArr)
console.log(xotakerArr)
console.log(gishatichArr)
console.log(clearerArr)
console.log(vulcanumArr)
console.log(lavaArr)
console.log(qarArr)


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            } 
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            
            else if (matrix[y][x] == 6) {
                fill("orange");
            }
            else if (matrix[y][x] == 7) {
                fill("grey");
            }
                     
            rect(x * side, y * side, side, side)

            showIndexes(x, y)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].mult()
        xotakerArr[i].move()
        xotakerArr[i].eat()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }
    for (var i in clearerArr) {
        clearerArr[i].move()
        clearerArr[i].clear()

    }
    for (var i in vulcanumArr) {
        vulcanumArr[i].mult()
        vulcanumArr[i].qaranal()
    }
}



function showIndexes(x, y) {
}