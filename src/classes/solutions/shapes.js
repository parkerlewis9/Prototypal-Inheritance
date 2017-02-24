function Quadrilateral() {}

Quadrilateral.prototype.numberOfSides = 4;


function Parallelogram() {}

Parallelogram.prototype = Object.create(Quadrilateral.prototype);
Parallelogram.prototype.constructor = Parallelogram;
Parallelogram.prototype.hasParallelSides = true;
Parallelogram.prototype.oppositeAnglesAreCongruent = true;
Parallelogram.prototype.consecutiveAnglesDegreesSum = 180;


function Rectangle(length, width) {
	this.area = length * width;
	this.perimeter = (length * 2) + (width * 2);
}

Rectangle.prototype = Object.create(Parallelogram.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.diagonalsAreCongruent = true;
Rectangle.prototype.degreesOfAllAngles = 90;


function Square(length) {
	Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.allSidesAreCongruent = true;


module.exports = Square;