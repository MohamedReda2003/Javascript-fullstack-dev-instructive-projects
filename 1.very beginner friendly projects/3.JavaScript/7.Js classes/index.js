//JavaScript Classes are templates for JavaScript Objects.
// We can describe it as the second level of JS objects

// We will create a new class that we will name it Car
class Car {
    //constructor is a build-in method to add properties to our class 
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    //we can define a new method like the following one :
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
      }
}
// Now to add a new class object it is very easy:
const myCar = new Car("R4", 1987);
const mybrother_car = new Car("Ford", 2014);
console.log(`I have an old ${myCar.name} car that my father bought in ${myCar.year}. That makes it ${myCar.age()} years old`);