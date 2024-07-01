// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great though .map() is will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define a array of magicians names
let magician_names = ["Marry Poter", "Harry", "Vandana\n"];
// Making a copy of Orignal array though .slice() function
let copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);
// Show both array Orignal and Copied
// Orignall
console.log("Orignall Array\n");
show_magicians(magician_names);
// Copied
console.log("Copied Array\n");
show_magicians(copy_great_magicians);
export {};
