/*Q-41:- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

// Creating an Array to store magician's names
let magician_names:string[]=["Daren", "Jacklen", "Suhani"]

// Creating a function to print each magician name
function show_magicians(magicians:string[]){
    magicians.forEach(name=>console.log(name));
}
// Calling the function to print each magician name
show_magicians(magician_names);
