/*Q-15:- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you
are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
var Guest_list = ["Ali", "Noor", "Sidra", "Hania"];
var not_comming = Guest_list[3];
console.log("hello! friends, it is to inform you that \"".concat(not_comming, "\" is not comming to dinner."));
Guest_list.splice(3, 4, "Hamid");
Guest_list.forEach(function (eachGuest) { return console.log("Hi ".concat(eachGuest, ", you are invited to dinner. ")); });
