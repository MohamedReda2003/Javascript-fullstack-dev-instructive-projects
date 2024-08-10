// there are mainly three ways to express the conditional statements in JavaScript:
// 1. with if statements:
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// 2. with the switch 
let greeting_with_switch;

switch (true) {
  case (time < 10):
    greeting_with_switch = "Good morning";
    break;
  case (time < 20):
    greeting_with_switch = "Good day";
    break;
  default:
    greeting_with_switch = "Good evening";
}

console.log(greeting_with_switch);

// 3. with ternary operator:
const greeting_with_ternary_operator = time < 10 ? "Good morning" : (time < 20 ? "Good day" : "Good evening");
console.log(greeting_with_ternary_operator);