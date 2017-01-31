let expect = require("chai").expect,
	ParentClass = require("../classes/family").ParentClass,
	ChildClass = require("../classes/family").ChildClass;


describe("Prototypal Inheritance", function(){

	before(function(){
		parent = new ParentClass("Person", "McKenzie Mint", 34);
		child = new ChildClass("SoftwareEngineer", "Madolyn Snyder", 32, ["JavaScript", "Python"]);
	});

	describe("#ParentClass", function(){

		describe("Characteristics of an instance", function(){

			it("should exhit the expected behavior of an instance of a parent class", function(){
				expect(parent.nameOfClass).to.equal("Person");
				expect(parent.name).to.equal("McKenzie Mint");
				expect(parent.age).to.equal(34);

				expect(parent.sayHi()).to.equal("Hi, I'm McKenzie Mint and I am 34 years old.");
				expect(parent.sayBye()).to.equal("Bye for now!");
				
				expect(parent.skills).to.be.undefined;
				expect(parent.introduceSelf).to.be.undefined;	
			});

			it("should hold its instance properties", function(){
				expect(parent.hasOwnProperty("nameOfClass")).to.be.true;
				expect(parent.hasOwnProperty("name")).to.be.true;
				expect(parent.hasOwnProperty("age")).to.be.true;
			});

			it("should not hold properties intended to be inherited", function(){
				expect(parent.hasOwnProperty("sayHi")).to.be.false;
				expect(parent.hasOwnProperty("sayBye")).to.be.false;
				expect(parent.hasOwnProperty("introduceSelf")).to.be.false;
			});

		});

		describe("Characteristics of the constructor function's prototype", function(){

			it("should hold properties inherted to be inherited by instances", function(){
				expect(ParentClass.prototype.hasOwnProperty("sayHi")).to.be.true;
				expect(ParentClass.prototype.hasOwnProperty("sayBye")).to.be.true;
			});

		});
	});

	describe("#ChildClass", function(){

		describe("Characteristics of an instance", function(){

			it("should exhit the expected behavior of an instance of a child class", function(){
				expect(child.nameOfClass).to.equal("SoftwareEngineer");
				expect(child.name).to.equal("Madolyn Snyder");
				expect(child.age).to.equal(32);

				expect(child.sayHi()).to.equal("Hi, I'm Madolyn Snyder and I am 32 years old.");
				expect(child.sayBye()).to.equal("Bye for now!");

				expect(child.skills).to.deep.equal(["JavaScript", "Python"]);
				expect(child.introduceSelf()).to.equal("Hello, my name is Madolyn Snyder, I am 32 years old, and my interests are JavaScript and Python.");
			});

			it("should hold its instance properties", function(){
				expect(child.hasOwnProperty("nameOfClass")).to.be.true;
				expect(child.hasOwnProperty("name")).to.be.true;
				expect(child.hasOwnProperty("age")).to.be.true;
				expect(child.hasOwnProperty("skills")).to.be.true;
			});

			it("should not hold properties intended to be inherited", function(){
				expect(child.hasOwnProperty("sayHi")).to.be.false;
				expect(child.hasOwnProperty("sayBye")).to.be.false;
				expect(child.hasOwnProperty("introduceSelf")).to.be.false;
			});

		});

		describe("Characteristics of the constructor function's prototype", function(){

			it("should hold methods intented to be inherited directly by all instances of the constructor", function(){
				expect(ChildClass.prototype.hasOwnProperty("introduceSelf")).to.be.true;
			});

			it("should not hold properties inherted from the parent class", function(){
				expect(ChildClass.prototype.hasOwnProperty("sayHi")).to.be.false;
				expect(ChildClass.prototype.hasOwnProperty("sayBye")).to.be.false;
			});

		});

	});

	describe("Proof that the prototype chain is established", function(){

		const liona = new ChildClass("Artist", "Liona Larson", 26, ["photography", "painting", "Photoshop"]);

		child_class_prototype = liona.__proto__

		it("An instance of ChildClass should have a prototype object identical to ChildClass' prototype", function(){

			expect( child_class_prototype ).to.deep.equal( ChildClass.prototype );

		});

		it("The prototype of an instance of ChildClass should have a prototype identical to ParentClass' prototype", function(){

			parent_class_prototype = child_class_prototype.__proto__

			expect( parent_class_prototype ).to.deep.equal( ParentClass.prototype );

		});

		it("An instance of ChildClass should inherit from Object through ParentClass' prototype", function(){

			object_class_prototype = parent_class_prototype.__proto__

			expect(object_class_prototype).to.deep.equal( Object.prototype );
		});

		it("The chain should terminate after Object's prototype", function(){

			termination = object_class_prototype.__proto__

			expect(termination).to.deep.equal( null );
		});

	});
	
});