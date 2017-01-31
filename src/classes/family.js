const 	helpers = require("../helpers/familyHelpers"),
		pluralizeYear = helpers.pluralizeYear,
		stringifySkills = helpers.stringifySkills;

function ParentClass(nameOfClass, name, age) {
	this.nameOfClass = nameOfClass;
	this.name = name;
	this.age = age;
}

ParentClass.prototype.sayHi = function() {
	return "Hi, I'm " + this.name + " and I am " + this.age + pluralizeYear(this.age) + ".";
}

ParentClass.prototype.sayBye = function() {
	return "Bye for now!";
}


function ChildClass(nameOfClass, name, age, skills) {
	ParentClass.call(this, nameOfClass, name, age);
	this.skills = skills;
}

ChildClass.prototype = Object.create(ParentClass.prototype);
ChildClass.prototype.constructor = ChildClass;

ChildClass.prototype.introduceSelf = function() {
	return "Hello, my name is " + this.name + ", I am " + this.age + pluralizeYear(this.age) + ", and " + stringifySkills(this.skills);
}


module.exports = {
	ParentClass,
	ChildClass
}