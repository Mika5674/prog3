var random = require("./random");

module.exports = class Bomber{
     constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions1 = [
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
        ];
        this.directions2 = [
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
            [this.x - 1, this.y + 2]

           
        ];
    }
    getNewDirections1(){
        this.directions1 = [
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
        ];
    }
    getNewDirections2(){
        this.directions2 = [
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
            [this.x - 1, this.y + 2]
        ];
    }
    chooseCell1(character) {
        this.getNewDirections1()
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions1[i]);

                }
            }

        }

        return found;

    }
    chooseCell2(character) {
        this.getNewDirections2()
        var found = [];
        for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions2[i]);

                }
            }

        }

        return found;

    }

    move(){
        var empty = random(this.chooseCell2(0))
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX;
            this.y = newY;
        }
    }
    clearSummer(){
        this.multiply++;
        var grass = this.chooseCell1(1);
        var xotaker = this.chooseCell1(2);
        var gishatich = this.chooseCell1(3);
        var vulcanum = this.chooseCell1(5);
        var lava = this.chooseCell1(6);
        var qar = this.chooseCell1(7);
        if(this.multiply > 3){
            if(grass){
           for(var i in grass){
                var empty = grass[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1);

                        break;
                    }
                } 
            }
            
            this.multiply = 0;
        }
        if(xotaker){
           for(var i in xotaker){
                var empty = xotaker[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                        xotakerArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(gishatich){
           for(var i in gishatich){
                var empty = gishatich[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                        gishatichArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(vulcanum){
           for(var i in vulcanum){
                var empty = vulcanum[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in vulcanumArr) {
                    if (vulcanumArr[i].x == newX && vulcanumArr[i].y == newY) {
                        vulcanumArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(lava){
           for(var i in lava){
                var empty = lava[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in lavaArr) {
                    if (lavaArr[i].x == newX && lavaArr[i].y == newY) {
                        lavaArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(qar){
           for(var i in qar){
                var empty = qar[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in qarArr) {
                    if (qarArr[i].x == newX && qarArr[i].y == newY) {
                        qarArr.splice(i, 1);

                        break;
                    }
                }
            }
            
         }
        }
        
    }
    clear(){
        this.multiply++;
        var grass = this.chooseCell2(1);
        var xotaker = this.chooseCell2(2);
        var gishatich = this.chooseCell2(3);
        var vulcanum = this.chooseCell2(5);
        var lava = this.chooseCell2(6);
        var qar = this.chooseCell2(7);
        if(this.multiply > 3){
            if(grass){
           for(var i in grass){
                var empty = grass[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1);

                        break;
                    }
                } 
            }
            
            this.multiply = 0;
        }
        if(xotaker){
           for(var i in xotaker){
                var empty = xotaker[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                        xotakerArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(gishatich){
           for(var i in gishatich){
                var empty = gishatich[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                        gishatichArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(vulcanum){
           for(var i in vulcanum){
                var empty = vulcanum[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in vulcanumArr) {
                    if (vulcanumArr[i].x == newX && vulcanumArr[i].y == newY) {
                        vulcanumArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(lava){
           for(var i in lava){
                var empty = lava[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in lavaArr) {
                    if (lavaArr[i].x == newX && lavaArr[i].y == newY) {
                        lavaArr.splice(i, 1);

                        break;
                    }
                }
            }
            
        }
        if(qar){
           for(var i in qar){
                var empty = qar[i]
                var newY = empty[1]
                var newX = empty[0]
                matrix[newY][newX] = 0;

                for (var i in qarArr) {
                    if (qarArr[i].x == newX && qarArr[i].y == newY) {
                        qarArr.splice(i, 1);

                        break;
                    }
                }
            }
            
         }
        }
        
    }
}