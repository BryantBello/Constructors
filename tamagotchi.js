// Constructor - Setting properties for that variable.
// Prototype - master example. 
var Tamagotchi = function() {
    this.hungry = false;
    this.sick = false;
    this.age = 0;

    // Declare a series of methods for tamagotchis
    // This tamogatchi  
    this.feed = function() {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
        } else {
            console.log("No thanks, I'm full.");
            this.hungry = true;
        }
    };

    this.sleep = function() {
        console.log("zzzzzzzzzzzz");
    };

    this.medicate = function() {
        if (this.sick === true) {
            console.log("I feel much better");
            this.sick = false;
        } else {
            console.log("No thanks, I feel fine.");
            this.sick = true;
        }
    };

    this.increaseAge = function() {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age +
            " years old!");
    };
};


// Creating new object (invoking a new object)
var dog = new Tamagotchi();

// Specific methods to dog (BUT NOT TO TAMOGOTCHI)
dog.bark = function() {
    console.log("ruff ruff!");
}

dog.goOutside = function() {
    console.log("I own that tree now!");
}

// Created a new cat (which is a type of tamogotchi)
var cat = new Tamagotchi();
cat.meow = function() {
    console.log("Meow!");
}

// Cat has specific method scratchthatchair.
cat.scratchThatChair = function() {
    console.log("Stop scratching that chair!!!");
}
