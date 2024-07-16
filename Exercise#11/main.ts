/*Q-11:- Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
accessing each element in the list, one at a time. */

let list_names:string[]=["Ali", "Ahmed", "Nasir", "Hooria"];
console.log(list_names[0]);
console.log(list_names[1]);
console.log(list_names[2]);
console.log(list_names[3]);
//Also,
let names:string[]=["Ali", "Ahmed", "Nasir", "Hooria"];
names.forEach(friend=>console.log(friend));
