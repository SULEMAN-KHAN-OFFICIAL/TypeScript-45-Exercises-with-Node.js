/*Q-35:- Animals: Think of at least three different animals that have a common characteristic. Store the names 
of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence 
such as Any of these animals would make a great pet! */

// Creating an Array to store the names of animals
let animals_names:string[]=["Goat", "Cow", "Camel"];

// Using for-loop
for (let eachAnimal of animals_names){
    console.log(eachAnimal, "is a herbivorous animal.");
}

// Printing message outside the for-loop
console.log("These animals are good source of milk and meat. Also, any of these animals would make a great pet.");
