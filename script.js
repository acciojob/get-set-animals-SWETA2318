// Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a sound
    makeSound() {
        console.log("Generic animal sound");
    }
}

// Cat class extending Animal
class Cat extends Animal {
    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Dog class extending Animal
class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Example usage
const genericAnimal = new Animal("Generic Species");
console.log(genericAnimal.species); // Output: Generic Species
genericAnimal.makeSound(); // Output: Generic animal sound

const cat = new Cat("Domestic Cat");
console.log(cat.species); // Output: Domestic Cat
cat.makeSound(); // Output: Generic animal sound
cat.purr(); // Output: purr

const dog = new Dog("Golden Retriever");
console.log(dog.species); // Output: Golden Retriever
dog.makeSound(); // Output: Generic animal sound
dog.bark(); // Output: woof