/*Q-43:- Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy 
of the array of magicians’ names. Because the original array will be unchanged, return the new array and 
store it in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name. */

// Creating an Array to store magician's names
let magicianNames:string[]=["Daren", "Jacklen", "Suhani"]

// Creating a function to show each magician name
function show_Magicians(magicians:string[]){
    magicians.forEach(name=>console.log(name));
}
// Creating a function to modify the array of magicians
function make_Great(magician:string[]){
    return magician.map(name=>`The Great ${name}`);
}
// Creating a copy of original array by using .slice() function
let copy_magicianNames=magicianNames.slice()

// Modifying the copied array to show 'The Great' with the names of each magician
let copy_great_magician=make_Great(copy_magicianNames);

// Printing both arrays original and copied
console.log("Original Array");
show_Magicians(magicianNames);
console.log("\nCopied Array");
show_Magicians(copy_great_magician);
