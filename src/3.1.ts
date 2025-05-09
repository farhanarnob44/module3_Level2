{
  class Animal {
    // public name: string;
    // public species: string;
    public sound: string;

    // parameter properties 


    constructor(public name: string,public species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shephard", "dog", "Ghew");
  const cat = new Animal("Persian", "cat", "Meow");
  console.log(dog.name);
  cat.makeSound();
}
