/*Q-13:- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and 
make a list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.” */

let transportation_modes:string[]=["toyota", "prado", "Vitz"];
transportation_modes.forEach(mode=> console.log(`i would like to own a ${mode}.`));
console.log(`But ${transportation_modes[2]} is my favourite car.`);
