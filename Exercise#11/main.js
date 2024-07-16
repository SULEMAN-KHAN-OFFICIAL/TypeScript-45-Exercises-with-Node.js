/*Q-11:- Names: Store the names of a few of your friends in a array called names. Print each person’s name by
accessing each element in the list, one at a time. */
var list_names = ["Ali", "Ahmed", "Nasir", "Hooria"];
console.log(list_names[0]);
console.log(list_names[1]);
console.log(list_names[2]);
console.log(list_names[3]);
//Also,
var names = ["Ali", "Ahmed", "Nasir", "Hooria"];
names.forEach(function (friend) { return console.log(friend); });
