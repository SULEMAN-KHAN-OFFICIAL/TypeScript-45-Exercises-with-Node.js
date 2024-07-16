/*Q-37:- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of
any size with a different message. */
// Creating a function
function make_Shirt(size, print_message) {
    if (size === void 0) { size = "Large"; }
    if (print_message === void 0) { print_message = "I love TypeScript"; }
    console.log("The shirt size is \"".concat(size, "\" and message \"").concat(print_message, "\" should be printed on the shirt."));
}
// Calling the function with default values
make_Shirt();
// Calling the function with Medium size and default message
make_Shirt("Mediam");
// Calling the with customised size and message    
make_Shirt("Small", "Learn Coding and Save your future");