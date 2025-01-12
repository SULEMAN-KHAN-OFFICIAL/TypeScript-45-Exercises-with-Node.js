/*Q-17:- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them
to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */
var Guest_List = ["Ali", "Noor", "Sidra", "Hania",]; // From Q#16
//Informing guests, only two people are invited
console.log("Unfortunate, I can only invite two people for dinner.");
//using while loop to keep only two people to be invited and removing other
while (Guest_List.length > 2) {
    var removed_guest = Guest_List.pop();
    console.log("Sorry, ".concat(removed_guest, " I cannot invite you to dinner."));
}
//Printing a message to last two lucky guests
Guest_List.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are still invited to dinner.")); });
//Removing last two names from the list
Guest_List.splice(0, Guest_List.length);
//Printing the list to confirm its empty
console.log("Empty List:", Guest_List);
