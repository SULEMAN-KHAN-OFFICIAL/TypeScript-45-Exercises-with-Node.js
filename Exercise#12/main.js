/*Q-12:- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
name, print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name.*/
var names_list = ["Ali", "Ahmed", "Nasir", "Horia"];
var message_tofriends = "kindly focus your studies.";
console.log("Hi", names_list[0], message_tofriends);
console.log("Hi", names_list[1], message_tofriends);
console.log("Hi", names_list[2], message_tofriends);
console.log("Hi", names_list[3], message_tofriends);
//Also,
var namesList = ["Ali", "Ahmed", "Nasir", "Horia"];
namesList.forEach(function (myfriend) { return console.log("Hi ".concat(myfriend, ",kindly focus on your studies.")); });
namesList.forEach(function (myfriend) { return console.log("Hi ".concat(myfriend, ", ").concat(message_tofriends, ".")); });
//Also,
var names3 = ["Ali", "Ahmed", "Nasir", "Horia"];
for (var _i = 0, names3_1 = names3; _i < names3_1.length; _i++) {
    var name_1 = names3_1[_i];
    console.log("Hi ".concat(name_1, ", kindly focus your studies."));
}
