/*Q-31:- No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
// using Array of Exercise 30 
var user_Names = ["Admin", "Ali", "Adil", "Ahmed", "Basit"];
// Removing all usernames from array
user_Names = [];
// ensuring that array is not empty
if (user_Names.length === 0) {
    console.log("Array is empty, So we need to find some users!");
}
else {
    //Using forEach method on Array
    user_Names.forEach(function (each_user) {
        if (each_user === "Admin") {
            console.log("Hello ".concat(each_user, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(each_user, ", thank you for logging in again."));
        }
    });
}
