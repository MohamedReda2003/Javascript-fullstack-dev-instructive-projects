// In real life, objects are things like: houses, cars, people, animals, or any other subjects.

// In JS, we have two ways to create an object:

// 1. By defining all its properties in the beginning:
var person = {firstName:"Saad", lastName:"Said", age:50, eyeColor:"black"};

//let's say I want to change a property:
person.age = 49;
// if you want to add a new property to it:
person.nationality = "Egyptian";

console.log("The person object:");
console.log(person);
// We can add a property with a method, a method is like a function that does not require a name like the following line:
person.full_name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(person.full_name());
// 2. By defining the object first then adding the properties later:
let car = {};
car.type = "Mercedes";
car.model = "240";
car.color = "white";

console.log("The car object:")
console.log(car)

// let's say I want to delete the car.color property:
delete car.color;
console.log("The car object after deleting the color property:")
console.log(car)