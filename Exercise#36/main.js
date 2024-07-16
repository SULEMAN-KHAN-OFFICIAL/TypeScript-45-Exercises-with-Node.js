/*Q-36:- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function. */
// Creating a function
function make_shirt(size, print_message) {
    console.log("The desired shirt size is \"".concat(size, "\" and message \"").concat(print_message, "\" should be printed on the shirt."));
}
// Calling the function
make_shirt("Medium", "AI is the future");
