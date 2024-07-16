/*Q-29:- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
is in your array, the if block should print a statement, such as You really like bananas! */

//Creating an Array
let favourite_fruits:string[]=["Mango", "Banana", "Guava"];

//Using five independent 'if' statements
if (favourite_fruits.includes("Guava")){console.log("You really like Guava!");}
if (favourite_fruits.includes("Banana")){console.log("You really like Banana!");}
if (favourite_fruits.includes("Apple")){console.log("You really like Apple!");}
if (favourite_fruits.includes("Mango")){console.log("You really like Mango!");}
if (favourite_fruits.includes("Watermelon")){console.log("You really like Watermelon!");}
