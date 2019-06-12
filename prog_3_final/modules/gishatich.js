var living_creature = require("./living_creature");
var random = require("./random");

module.exports = class Gishatich extends living_creature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 12;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy >= 24) {
            gishatichHashiv++;
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var newXt = new Gishatich(x, y)
            gishatichArr.push(newXt)
            this.energy = 12
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        this.multiply++
        var gr = random(this.chooseCell(1))
        var xt = random(this.chooseCell(2))
        if (gr && this.multiply > 5) {
            this.energy += 1;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);

                    break;
                }
            }

            this.y = newY
            this.x = newX
        }
        if (xt && this.multiply > 5) {
            this.energy += 2;
            var newX = xt[0]
            var newY = xt[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1);

                    break;
                }
            }

            this.y = newY
            this.x = newX
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);

                    break;
                }
            }
        }
    }
}