{

    // OOP inheritance 


    class Student {
         name: string;
         age: number;
         address: string;
    
        // parameter properties 
    
    
        constructor( name: string, age: number, address: string) {
          this.name = name;
          this.age = age;
          this.address = address;
        }
    
        getSleep(numberOfHours: number) {
          console.log(`This ${this.name} will sleep for ${numberOfHours}`);
        }
      }
    class Teacher extends Student {

        designation : string;
    
    
        constructor( name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation
        }
    
        getSleep(numberOfHours: number) {
          console.log(`This ${this.name} will sleep for ${numberOfHours}`);
        }

        takeClass(numberfClass: number){
            console.log(`${this.name} waill take ${numberfClass} classes`)
        }
      }
    
      const student1 = new Student("Farhan", 22, "Dhaka");
      const teacher = new Teacher("Mr. Ruba", 21, "Gazipur","Principle");
}