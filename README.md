# Prototypal Inheritance



A child class *inherits* from a parent class when it instantiates the same behavior in its instances as those of its parent class. That child class can then augment and/or extend the inherited behavior.

Different programming languages implement inheritance in different ways. JavaScript uses what is known as *prototypal inheritance*. That is, through use of what are called prototypes, “classes” in JavaScript can inherit from other “classes”.

While until recently JavaScript hadn’t the notion of a “class”, we will use the term class when referring to JavaScript’s constructor function pattern. That is, the creation of instances through use of the `new` keyword and constructor functions. 

##The Prototype Chain

The prototype chain is characterized by the behavior JavaScript exhibits when searching for properties on objects. 

When searching for the property “foo” on an object __obj__, JavaScript first looks at all the properties on the object itself. If “foo” cannot be found, it will then look for “foo” on the memory reference found in the .\_\_proto\_\_ property of __obj__. 

That memory reference, known as an object’s prototype, will natively point to JavaScript’s __Object.prototype__ object. Javascript will then look on __Object.prototype__ for the property “foo”. Not finding that to be a property of __Object.prototype__, JavaScript will traverse down the prototype chain again by looking to the prototype of __Object.prototype__. (that being the object to which it’s .\_\_proto\_\_ property points). The native behavior of JavaScript is such that __Object.prototype__’s .\_\_proto\_\_ property points to `null`. 

When trying to traverse down the chain, if JavaScript finds `null` it knows the property is nowhere to be found on the original object __obj__, nor any of the objects in it’s prototype chain. `undefined` is then returned. 


```
- Prototype Chain --

var obj = {
	"a": 1,
	"b": 2,
	"z": 26,
	...
	"__proto__": -------------------
};									|
									v

Object.prototype  ===  	{	
							"constructor": Object,
							"hasOwnProperty": hasOwnProperty,
							...
							"toString": toString,
							"__proto__": null
						}
				

```


##The `new` Keyword

The functionality of the `new` keyword when used with a constructor function natively sets up this prototype chain for us and gives us a view into how to achieve inheritance in JavaScript. The characteristic of interest of the `new` keyword is it’s setting of the .\_\_proto\_\_ property. When using the `new` keyword, *the new object being created’s .\_\_proto\_\_ property is set to point to the .prototype property of it’s constructor function*. This allows the prototype chain to do its work as stated above.

```
- new Keyword -

function Banana(origin, ageInWeeks) {
	this.origin = origin;
	this.age = ageInWeeks;
}

Banana.prototype.getColor = function getColor() {
	if (age < 2)  return "green";
	else if (age < 4) return "yellow";
	else return "brown";
};

var b = new Banana("Costa Rica", 3);

||||||||||||||||||||||||||||||||||||||||||||||||||

b === {
	"origin": "Costa Rica",
	"age": 3,
	"__proto__": -------------------
};									|
									v

Banana.prototype  ===  	{	
							"getColor": getColor,
							"constructor": Banana,
							"__proto__": -------------------
						}									|
															v
													Object.prototype

```

##Object.create

JavaScript comes with a way to allow us to do prototype plumbing relatively easily. By prototype plumbing we mean repointing of the .\_\_proto\_\_ property. Object.create will create an empty object *whose .\_\_proto\_\_ property will point to the whatever object is passed to it*. Said another way, Object.create allows us to set up the prototype chain of an object.


```
- Object.create -

var tinkering = {
	"tinker": "tailor",
	"soldier": "spy"
}

var emptyButPlumbed = Object.create(tinkering);

||||||||||||||||||||||||||||||||||||||||||||||||||

emptyButPlumbed === {

	"__proto__": -------------------
};									|
									v

	tinkering  ===  	{	
							"soldier": "spy",
							"tinker": "tailor",
							"__proto__": -------------------
						}									|
															v
													Object.prototype

```


##Achieving Inheritance

JavaScript natively implements inheritance in its objects through use of the `new` keyword and the prototype chain. We can achieve inheritance from our own classes by inserting other prototypes into the prototype chain of our objects.

All we have to do is use Object.create to make us a new empty object with its .\_\_proto\_\_ property pointing to the prototype of the parent class we want to inherit from. Then we set the child class' .prototype property equal this new object. The `new` keyword will take care of the rest of the plumbing. And the prototype chain will ensure that properties properly search all inherited class' prototypes.

Study the code in [/src][1]. The file [/src/classes/family.js][2] shows the code for implementing complete inheritance. The tests in [/src/tests/family.test.js][3] prove that the code implements inheritance.

>As you will see, we also reset the .constructor property of that new prototype and use the `.call`  function. Neither will be discussed here. Suffice to say, they allow objects to more fully inherit. But, the inheritance we have achieved is enough of a load to discuss for now and that will be for another time.

***

###Sources

[Inheritance and the prototype chain - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[new operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

[Object.create() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

***

# License

Prototypal Inheritance is released under the [MIT License](https://opensource.org/licenses/MIT)


[1]: ./src/classes
[2]: ./src/classes/family.js
[3]: ./src/tests/family.test.js
