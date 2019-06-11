var living_creature = require("./living_creature");
var random = require("./random");

class Qar {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}
class Lava {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
}
module.exports = class Vulcanum {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],

            [this.x - 3, this.y - 3],
            [this.x + 3, this.y + 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y + 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x + 2, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x + 2, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x - 2, this.y + 3]
        ]
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);

                }
            }

        }

        return found;

    }
    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        var grass = random(this.chooseCell(1));
        var xotaker = random(this.chooseCell(2));
        var gishatich = random(this.chooseCell(3));
            if(this.multiply < 45){
               if (empty && this.multiply > 10) {
                var newX = empty[0]
                var newY = empty[1]
                matrix[newY][newX] = 6
                var newLava = new Lava(newX, newY)
                lavaArr.push(newLava)
                }
                if (grass && this.multiply > 10) {
                    var newX = grass[0]
                    var newY = grass[1]
                    matrix[newY][newX] = 6
                    var newLava = new Lava(newX,newY)
                    lavaArr.push(newLava)

                    for (var i in grassArr) {
                        if (grassArr[i].x == newX && grassArr[i].y == newY) {
                            grassArr.splice(i, 1);
                        }
                    }
                }
                if (xotaker && this.multiply > 10) {
                    var newX = xotaker[0]
                    var newY = xotaker[1]
                    matrix[newY][newX] = 6
                    var newLava = new Lava(newX, newY)
                    lavaArr.push(newLava)

                    for (var i in xotakerArr) {
                        if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                            xotakerArr.splice(i, 1);
                        }
                    }
                }
                if (gishatich && this.multiply > 10) {
                    var newX = gishatich[0]
                    var newY = gishatich[1]
                    matrix[newY][newX] = 6
                    var newLava = new Lava(newX, newY)
                    lavaArr.push(newLava)

                    for (var i in gishatichArr) {
                        if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                            gishatichArr.splice(i, 1);
                        }
                    }
                 }  
            }
            
        
    }
    qaranal(){
        var lava = random(this.chooseCell(6))
        
        if(lava && this.multiply > 26){
            var newY = lava[1]
            var newX = lava[0]
            matrix[newY][newX] = 7
            var qr = new Qar(newX, newY)
            qarArr.push(qr)
            for (var i in lavaArr) {
                if (lavaArr[i].x == newX && lavaArr[i].y == newY) {
                    lavaArr.splice(i, 1);
                }
            }
        }
    }
}



