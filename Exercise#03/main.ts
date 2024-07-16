/*Q-03:-Name Cases: Store a person’s name in a variable, 
 and then print that person’s name in lowercase, uppercase, and titlecase.*/
 
 console.log("suleman khan\nSULEMAN KHAN\nSuleman Khan")  

 //Also,
 let person_name:string="Suleman khan"
 console.log(person_name.toLowerCase())
 console.log(person_name.toUpperCase())
 console.log(person_name.replace(/\b\w/g,(char)=>char.toUpperCase()))