/*Q-18:- Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.*/

// Creating a veriable to store the locations in a array
let seeing_theWorld:string[]=['HiraCave', 'TajMahal', 'GizzaPyramids', 'ChinaWall'];
// Printing the array without any modification
console.log("Original order:",seeing_theWorld);
// Printing the array in alphabatical order 
console.log("Alphabatical order:",[...seeing_theWorld].sort());
// Printing the array in original order again
console.log("Still in Original order:",seeing_theWorld);
// Printing the array in reverse alphabetical order
console.log("Reverse Alphabatical order:",[...seeing_theWorld].reverse());
// Printing the array in original order again
console.log("Still in Original order:",seeing_theWorld);
// Printing the array showing its original order has changed
console.log("Reverse order:",seeing_theWorld.reverse());
// Printing the array showing its back to its original order
console.log("Reversing back to its Original order:",seeing_theWorld.reverse());
// Printing the array by changing it in alphabatical order
console.log("Alphabatical order:",seeing_theWorld.sort());
// Printing the array by changing it in reverse alphabatical order
console.log("Reverse Alphabatical order:",seeing_theWorld.reverse());
