{
    // polymorphism 

    class Person {
        getSleep () {
            console.log("I am sleeping for 8 hours ")
        }
    }
    class Developer extends Person {
        getSleep(){
            console.log(`I am sleeping for 6 hours per day`)
        }
    }

    const getSleepingHours = (param : Person) => {
        param.getSleep ()
    }

    const person1 = new Person ()
    const person2 = new Person ()
    const person3 = new Person ()

    getSleepingHours(person1);

    class Shape {
        getArea () : number {
            return 0;
        }
    }
    class Circle extends Shape{
        radius : number ;
        constructor (radius : number){
            super ();
            this.radius = radius
        }
        getArea (): number {
            return Math.PI * this.radius * this.radius
        }

        }
    }
