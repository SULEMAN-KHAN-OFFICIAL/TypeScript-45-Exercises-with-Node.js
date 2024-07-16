/*Q-32:- Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a
message that the person will need to enter a new username. If a username has not been used, print a message
saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
// Creating an array having names of current users
var current_users = ["Ahmad", "Ali", "Babar", "Maham", "Binish"];
// Creating an array having names of new users
var new_users = ["Akbar", "ali", "Qadir", "Ribha", "binish"];
// To check for new users either username is available or not
new_users.forEach(function (new_each_user) {
    var our_condition = current_users.some(function (current_each_user) { return current_each_user.toLowerCase() === new_each_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry, ".concat(new_each_user, " is already in use."));
    }
    else {
        console.log("This username ".concat(new_each_user, " is Available."));
    }
});
