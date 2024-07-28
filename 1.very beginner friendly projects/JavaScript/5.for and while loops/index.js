// For and While loops are methods to repeat an action more than once, we can use while in all the cases even instead of for but it is recommandable to use for loop in the actions where we already know how many iterations we will needs,whereas we use the while loop in the cases when we don't know how many times we will repeat an action.
var person = {firstName:"Saad", lastName:"Said", age:50, eyeColor:"black",nationality:"Egyptian"};
text = "";
for (let x in person) {
    text += person[x] + ", ";
};
console.log(text);
// in this previous example, we know the properties count, so we know how many times we will repeat the action of adding the values to the text string, and we can see the final result on the console.

// In the next example, we will find the first 10 prime numbers, we don't know how many many we must go through to find these prime ones, that is why we will use while loop
var prime_numbers = []
// first we will define a function to test on the number if it is prime or not:
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
number = 1
while (prime_numbers.length<10){
    if (isPrime(number)) {
        prime_numbers.push(number);
    }
    number++;
    // changing the value of the value we are testing by incrementation or decrementation is required in the while loop to pass to another step in the execution, or else you will be stuck in an infinite loop
}
console.log(`the first 10 prime numbers are: ${prime_numbers}`);
