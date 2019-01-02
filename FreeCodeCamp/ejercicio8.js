//=============================================================
//===== Add the own properties of canary to the array ownProps.
//=============================================================

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);

//========================================================================================================================
//=====You have now seen two kinds of properties: own properties and prototype properties.
//Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
//========================================================================================================================

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property)
    }
}
console.log(ownProps);
console.log(prototypeProps);

//===================================================================================================================================================
//=====Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog,
// otherwise return false.
//===================================================================================================================================================

function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

//====================================================================================================================================
//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
//====================================================================================================================================
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: () => `nom nom nom`,
    describe: () => `My names is ${this.name}`
};

//======================================================
//Define the constructor property on the Dog prototype.
//======================================================

function Dog(name) {
    this.name = name;
}

//=================================
// Modify the code below this line
//=================================
Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

//===================================================
//Use isPrototypeOf to check the prototype of beagle.
//===================================================
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

//=========================================================
//=====Modify the code to show the correct prototype chain.
//=========================================================

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//==========================================================================================================================================
//=====The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
//==========================================================================================================================================

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

//=============================================================================
//=====Use Object.create to make two instances of Animal named duck and beagle.
//=============================================================================

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

//==============================================================
//Modify the code so that instances of Dog inherit from Animal.
//==============================================================

function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"

//==================================================================================================
//=====Fix the code so duck.constructor and beagle.constructor return their respective constructors.
//==================================================================================================

function Animal() {}

function Bird() {}

function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

//==========================================================================================================================================
//=====Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
//Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.
//==========================================================================================================================================

function Animal() {}
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() {}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof");
}


// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

//=================================================================================================
//=====Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."
//=================================================================================================

function Bird() {}

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
};

// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//===============================================================================================================================================
//=====Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
//===============================================================================================================================================

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line

let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("glide");
    }
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

//======================================================================================================================================================
//=====Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight.
//======================================================================================================================================================

function Bird() {
    let weight = 15;

    this.getWeight = function() {
        return weight;
    };
}

let ducky = new Bird();

ducky.getWeight();

//===================================================================================================================================
//=====Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
//===================================================================================================================================

(function() {
    console.log("A cozy nest is ready");
})();

//==========================================================================================================================
//======Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
//==========================================================================================================================

let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

funModule.isCuteMixin(duck);
duck.isCute();