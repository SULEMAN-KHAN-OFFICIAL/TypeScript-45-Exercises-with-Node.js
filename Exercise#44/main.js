/*Q-44:- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should print a
summary of the sandwich that is being ordered. Call the function three times, using a different number of
arguments each time. */
// Creating a function
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with following items: \n");
    items.forEach(function (eachitem) { return console.log(eachitem); });
    console.log("\nEnjoy your sandwich.");
}
// Calling function three times with the different items each time.
make_sandwich("Chees", "lattus", "Mayo");
make_sandwich("Chicken", "Egg", "Ketchup", "Onion", "Chilli sauce");
make_sandwich("Tomato", "Butter");
