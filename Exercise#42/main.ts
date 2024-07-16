/*Q-42:- Great Magicians: Start with a copy of your program from Exercise 41. Write a function called 
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

// Creating an Array to store magician's names
let magician_Names:string[]=["Daren", "Jacklen", "Suhani"]

// Creating a function to show each magician name
function Show_magicians(magicians:string[]){
    magicians.forEach(name=>console.log(name));
}
// Creating a function to modify the array of magicians
function make_great(magician:string[]){
    return magician.map(name=>`The Great ${name}`);
}
// Calling a function to print modified list of magicians 
let great_magicians = make_great(magician_Names);
Show_magicians(great_magicians)
