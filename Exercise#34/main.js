/*Q-34:- Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and
then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional
sentence, such as I really love pizza! */
// Creating an Array to store pizza names
var Pizzas_name = ["Spicy veg", "pepperoni", "Chicken Fajita"];
// Using for-loop
for (var _i = 0, Pizzas_name_1 = Pizzas_name; _i < Pizzas_name_1.length; _i++) {
    var each_pizza = Pizzas_name_1[_i];
    console.log("I like ".concat(each_pizza, " pizza."));
}
// Printing a line outside for-loop
console.log("My favourite pizza is chicken Fajita.");
console.log("My Family members don't like pizzas as they are desi lovers.");
console.log("I am fond of Pizza!");
