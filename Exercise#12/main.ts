/*Q-12:- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
name, print a message to them. The text of each message should be the same, but each message should be 
personalized with the person’s name.*/
let names_list:string[]=["Ali", "Ahmed", "Nasir", "Horia"]; 
let message_tofriends="kindly focus your studies.";
console.log("Hi",names_list[0], message_tofriends);
console.log("Hi",names_list[1], message_tofriends);
console.log("Hi",names_list[2], message_tofriends);
console.log("Hi",names_list[3], message_tofriends);
//Also,
let namesList:string[]=["Ali", "Ahmed", "Nasir", "Horia"]; 
namesList.forEach(myfriend=>console.log(`Hi ${myfriend},kindly focus on your studies.`));
namesList.forEach(myfriend=>console.log(`Hi ${myfriend}, ${message_tofriends}.`));
//Also,
let names3:string[]=["Ali", "Ahmed", "Nasir", "Horia"];
for (let name of names3)
console.log(`Hi ${name}, kindly focus your studies.`);
