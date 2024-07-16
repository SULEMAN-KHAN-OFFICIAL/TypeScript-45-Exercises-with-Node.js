/*Q-13:- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and
make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.” */
var transportation_modes = ["toyota", "prado", "Vitz"];
transportation_modes.forEach(function (mode) { return console.log("i would like to own a ".concat(mode, ".")); });
console.log("But ".concat(transportation_modes[2], " is my favourite car."));
