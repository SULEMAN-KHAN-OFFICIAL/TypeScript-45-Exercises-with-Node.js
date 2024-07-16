/*Q-21:- Think of something you could store in a TypeScript Object. Write a program that creates Objects 
containing these items.*/

// Creating an interface of Object
let country:{Name:string; Founder:string; IndependenceYear:number}
 = {Name:"Pakistan", Founder:"M.A. Jinnah", IndependenceYear:1947};

 // Printing the information of our object
console.log(`Country Info: ${country.Name}, Founded by ${country.Founder}, 
got independence on 14th August${country.IndependenceYear}.`);
