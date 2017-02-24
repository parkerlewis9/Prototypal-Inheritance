let expect = require("chai").expect,
	Square = require("../classes/shapes.js");

describe("Shape Inheritance", function(){

	before(function(){
		square = new Square(2);
	});

	describe("#Square", function(){
		
		it("should create instances with correct area and perimeter", function(){
			expect(square.area).to.equal(4);
			expect(square.perimeter).to.equal(8);
		});

		it("should create instances which inherit from its own prototype", function(){
			expect(square.allSidesAreCongruent).to.be.true;
		});

		it("should create instances which inherit from Rectangle", function(){
			expect(square.diagonalsAreCongruent).to.be.true;
			expect(square.degreesOfAllAngles).to.equal(90);
		});

		it("should create instances which inherit from Parallelogram", function(){
			expect(square.hasParallelSides).to.be.true;
			expect(square.oppositeAnglesAreCongruent).to.be.true;
			expect(square.consecutiveAnglesDegreesSum).to.equal(180);
		});

		it("should create instances which inherit from Quadrilateral", function(){
			expect(square.numberOfSides).to.equal(4);
		});
	});
});