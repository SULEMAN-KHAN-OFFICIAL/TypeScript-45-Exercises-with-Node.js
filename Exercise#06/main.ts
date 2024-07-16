
/*Q-06:- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

let whitespace_name:string="\n\tSuleman Khan\t\n";
let without_whitespace_name:string=whitespace_name.trim();
console.log(whitespace_name);
console.log(without_whitespace_name);  

//Also,
let Name:string="\n\tSuleman Khan\t\n";
console.log(Name); // with white space
console.log(Name.trim());  //without white space
