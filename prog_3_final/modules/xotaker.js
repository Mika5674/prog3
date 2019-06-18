var living_creature = require("./living_creature");
var random = require("./random");

module.exports = class Xotaker extends living_creature{
    constructor(x, y, index) {
       super(x,y,index);
        this.energy = 6;
        this.moveEnergy = 0;
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
        if (empty && this.energy >= 8) {
            xotakerHashiv++;
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var newXt = new Xotaker(x, y)
            xotakerArr.push(newXt)
            this.energy = 6
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    moveWinter() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        this.moveEnergy++;
        if (empty && this.moveEnergy > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
            this.moveEnergy = 0;
        }
    }
    eat() {
        this.multiply++
        var gr = random(this.chooseCell(1))
        if (gr && this.multiply > 5) {
            this.energy += 2;
            var newX = gr[0]
            var newY = gr[1]
            matrix[newY][newX] = 2
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
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);

                    break;
                }
            }
        }
    }
}