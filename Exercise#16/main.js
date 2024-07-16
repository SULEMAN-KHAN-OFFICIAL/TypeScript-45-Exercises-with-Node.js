/*Q-16:- More Guests: You just found a bigger dinner table, so now more space is available. Think of three
more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
//Creating Guest list 
var Guest_List = ["Ali", "Noor", "Sidra", "Hania",];
//Creating a veriable for the guest who is not comming to dinner
var Not_comming = Guest_List[3];
//Printing the name of guest who is unable to com
console.log("hello! friends, it is to inform you that \"".concat(Not_comming, "\" is not comming to dinner."));
//Add and remove values from guest list array
Guest_List.splice(3, 4, "Hamid");
//Message to be printed for the bigger table availability
console.log("Good News! There is a bigger table avaiable.");
//Adding a new guest as the starting index of the guest list array
Guest_List.unshift("Khalid");
//Adding a new guest as the ending index of the guest list array
Guest_List.push("Kamil");
//Creating a veriable for middle index of the guest list array
var middle_index = Math.floor(Guest_List.length / 2);
//Adding a new guest as the middle index of the guest list array
Guest_List.splice(middle_index, 0, "Jamal");
//Printing updated guest list
console.log("Updated Guests List.");
//Creating invitation to each guest of the updated list
Guest_List.forEach(function (to_eachguest) { return console.log("Hi ".concat(to_eachguest, ", You are invited to dinner.")); });
