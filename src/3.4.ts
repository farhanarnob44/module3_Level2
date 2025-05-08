{
    class Animal {
         name: string;
         species: string;
        
    
        // parameter properties 
    
    
        constructor( name: string, species: string ){
          this.name = name;
          this.species = species;
          
        }
 
    }
    class Dog extends Animal {
        constructor (name : string, species : string) {
            super(name, species)
        }
        makeBark () {
            console.log("I am shouting")
        }
    } 
    class Cat extends Animal {
        constructor (name : string, species : string) {
            super(name, species)
        }
        makeMeaw () {
            console.log("I am mdowing")
        }
    }
    const isDog = (animal : Animal ) : animal is Dog => {
        return animal instanceof Cat;
    }
    const isCat = (animal : Animal ) : animal is Cat => {
        return animal instanceof Dog;
    }

    const getAnimal = (animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBark();

        }
        else if ( isCat(animal)) {
            animal.makeMeaw();
        }
    }


    const dog = new Dog ("Dog bro", "dog")
    const cat = new Cat ("cat bro", "cat")
}