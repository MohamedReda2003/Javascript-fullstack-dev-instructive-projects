// Function to give the result of the product of var1 and var2
function product(var1, var2) {
    return var1 * var2;
  }
// As you see in the previous basic example, a function has a name, can have one or more parameters that we put inside parantheses, then we have inside brakets the steps we want to apply when we call the function.
var arithmetic_product = product(13,15);
console.log(arithmetic_product);

// The next function will convert the temperature value from Celcius to Fahrenheit:
function toFahrenheit(Celsius) {
    return 32+Celsius*(9/5);
}
var temperature = 38;
let value = toFahrenheit(temperature);
console.log(`${temperature} Celsius = ${value} Fahrenheit `);

// We have another type of functions: the arrow functions that help us to write shorter form of the function.

//let's rewrite the toFahrenheit function as an arrow function

C_2_F = (temp) => `${temp} Celsius = ${32+temp*(9/5)} Fahrenheit (this one with arrow function)`;
console.log(C_2_F(45));