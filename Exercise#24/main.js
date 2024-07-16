"use strict";
/*Q-24:- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and
less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array. */
Object.defineProperty(exports, "__esModule", { value: true });
//variables formation as per requirement of exercise
let fruit = "Mango";
let uppercase_fruit = "MANGO";
let five = 5;
let ten = 10;
let veg = ["Onion", "Potato", "Chilli", "Tomato"];
//Test for equality and inequality with strings
console.log("Is fruit equal to Mango?");
console.log(fruit == "Mango"); //True
console.log("Is fruit not equal to Mango?");
console.log(fruit != "Mango"); //false
//Test using LowerCase function
console.log("\n");
console.log("Is MANGO equal to the mango after applying lowercase fuction?");
console.log(uppercase_fruit.toLowerCase() == "mango"); //true
console.log("Is MANGO not equal to the mango after applying lowercase fuction?");
console.log(uppercase_fruit.toLowerCase() != "mango"); //false
//Numerical test
console.log("\nNumerical test");
console.log("Is five equal to 10?");
console.log(five == 10); //false
console.log("Is five not equal to 10?");
console.log(five != 10); //true
console.log("Is five greater than 0?");
console.log(five > 0); //true
console.log("Is ten less than 5?");
console.log(ten < 5); //false
console.log("Is five greater than or equal to 2?");
console.log(ten >= 5); //true
console.log("Is ten less than or equal to 5?");
console.log(ten <= 5); //false
//Test using 'and' (&&) operator
console.log("\n ten is not equal to 5 and ten is greater than 5.");
console.log(ten != 5 && ten > 5); //true
console.log("ten is not equal to 5 and ten is greater than 5.");
console.log(ten != 5 && ten > 20); //false
//Test using 'or' (||) operator
console.log("\n ten is greater than 40 OR ten is equal to 10.");
console.log(ten > 40 || ten == 10); //true
console.log("ten is greater than 40 OR ten is not equal to 10.");
console.log(ten > 40 || ten != 10); //false
//Test whether an item is in a array
console.log("\n Is 'Chilli' includes in veg array?");
console.log(veg.includes("Chilli")); //true
//Test whether an item is not in a array
console.log("\n Is 'Chilli' not includes in veg array?");
console.log(!veg.includes("Chilli")); //false
