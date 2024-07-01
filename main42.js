// Define the function to show magicians names
function showMagicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magicians great though .map() is will modify array
function makeGreat(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define a array of magicians names
let magician_names = ["Marry Poter", "Harry", "Vandana"];
// Call greatMagician that show modify magicians names
let greatMagicians = makeGreat(magician_names);
// Call showMagician that show modify magicians names
showMagicians(greatMagicians);
export {};
