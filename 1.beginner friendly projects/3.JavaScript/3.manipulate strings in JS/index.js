// A JavaScript string is zero or more characters written inside quotes "".
//example :
let day = "Monday is the first day of the week";
// The length of a string can be given like so:
var len = day.length;
//The charAt() method returns the character at a specified index (position) in a string:
var first_character_of_day = day.charAt(0);// here it will return M
// the at() method introduce the letter or character on the given index:
var chosen_character = day.at(3);// the returned result will be d
var chosen_character_with_different_method = day[3];// the same as the previous line
// try to print the previous variables and play around with them to understand their use very well.

// we can slice the strings, we give the indexes of the first and last character we want to take from the string as parameters to the method:
var day_from_day = day.slice(0,6);
console.log(day_from_day); //the result here is "Monday"

//if you enter only one parameter, all the characters before the given index will be sliced:
var day_from_day_1 = day.slice(6);
console.log(day_from_day_1);//the result here is "is the first day of the week"

//If a parameter is negative, the position is counted from the end of the string:
var day_from_day_2 = day.slice(-8);
console.log(day_from_day_2);// the result here is "the week"


// to join 2 strings or more:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

//To replace a specified value with another value in a string, we use the replace mothod:
let text = "Please visit Mr.Samir!";
let newText = text.replace("Samir", "Yassir");
console.log(newText);