/*Q-20:- Think of something you could store in a array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
containing these items.*/
// Creating a veriable to store names of languages
var list_languages = ["URDU", "ENGLISH", "ARABIC", "FRENCH", "CHINES"];
// Printing a heading of the list
console.log("List of World TOP 05 Languages.");
// Printing names of languages in the form of Array
console.log(list_languages);
// Printing names of languages in the form of List
list_languages.forEach(function (language) { return console.log(language); });
