# Prototypal Inheritance



A child class *inherits* from a parent class when it instantiates the same behavior in its instances as those of its parent class. That child class can then augment and/or extend the inherited behavior.

Different programming languages implement inheritance in different ways. JavaScript uses what is known as *prototypal inheritance*. That is, through use of what are called prototypes, “classes” in JavaScript can inherit from other “classes”.

While until recently JavaScript hadn’t the notion of a “class”, we will use the term class when referring to JavaScript’s constructor function pattern. That is, the creation of instances through use of the `new` keyword and constructor functions. 

##The Prototype Chain and The `new` Keyword

The prototype chain is characterized by the behavior JavaScript exhibits when searching for properties on objects. 

When searching for the property “foo” on an object __obj__, JavaScript first looks at all the properties on the object itself. If “foo” cannot be found, it will then look for “foo” on the memory reference found in the .\_\_proto\_\_ property of __obj__. 

That memory reference, known as an object’s prototype, will natively point to JavaScript’s __Object.prototype__ object. Javascript will then look on the __Object.prototype__ for the property “foo”. Not finding that to be a property of __Object.prototype__, JavaScript will traverse down the prototype chain again by looking to the prototype of __Object.prototype__. (that being the object to which it’s .\_\_proto\_\_ property points). The native behavior of JavaScript is such that __Object.prototype__’s .\_\_proto\_\_ property points to `null`. 

When trying to traverse down the chain, if JavaScript finds `null` it knows the property is nowhere to be found on the original object __obj__, nor any of the objects in it’s prototype chain. `undefined` is then returned. 

The functionality of the `new` keyword when used with a constructor function natively sets up this prototype chain for us and gives us a view into how to achieve inheritance in JavaScript. The characteristic of interest of the `new` keyword is it’s setting of the .\_\_proto\_\_ property. When using the `new` keyword, the new object being created’s .\_\_proto\_\_ property is set to point to the .prototype property of it’s constructor function. This allows the prototype chain to do its work as stated above.


— code goes here —

##Achieving Inheritance

JavaScript natively implements inheritance in its objects through use of the `new` keyword and the prototype chain. We can achieve inheritance from our own classes by inserting other prototypes into the prototype chain of our objects.

In order to do that, our work is clear. The .\_\_proto\_\_ property of our instance, __inst__, will point to the .prototype property of its constructor, ChildClass, when the `new` keyword is used to create it. We cannot change that. Our job is to make it such that that object (ChildClass.prototype)  has a .\_\_proto\_\_ property which points to an object that is the prototype of the class we want to inherit from (ParentClass.prototype). That way, with ParentClass.prototype in __inst__’s  chain, the properties we want to inherit will also be checked when the chain is traversed. Therefore, __inst__ will have inherited from ParentClass because ParentClass.prototype is on __inst__’s prototype chain.

##Object.create

JavaScript comes with a way to allow us to do this prototype tampering, I mean, inheritance relatively easily. Object.create will create an empty object *whose .\_\_proto\_\_ property will point to the whatever object is passed to it*. Said another way, Object.create allows us to set up the prototype chain of an object.

All we do is point the .prototype property of the child class constructor to a new empty with it’s .\_\_proto\_\_ property pointing to the prototype of the parent class by using Object.create.

— code goes here —

As you can see, we also reset the .constructor property of that new prototype and use the function .call. Neither will be discussed here. Suffice to say, they more allow objects to more fully inherit. But, the inheritance we have achieved is enough of a load to discuss for now and that will be for another time.

# License
Prototypal Inheritance is released under the [MIT License](https://opensource.org/licenses/MIT)
