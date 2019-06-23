
module.exports = class Walkblock {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	move(){
		matrix[this.y][this.x] = 0
		
		this.y = this.y + 1;
		
		matrix[this.y][this.x] = 8
	}
}
