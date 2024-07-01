//Countries to Visit:
let visitCountries = ["Turkey", "Saudia Arabia", "UAE", "USA", "Ireland"];
//In Original Order:
console.log(visitCountries);
//In Alphabetical Order:
console.log([...visitCountries].sort());
//Array still in its Original Order:
console.log(visitCountries);
//Reverse the Order of list:
console.log([...visitCountries].sort().reverse());
//Back to it's Original Order:
console.log(visitCountries);
//Reverse the Order of List:
visitCountries.reverse();
console.log(visitCountries);
//Reverse the Order Again and Bring Back to its Original control:
visitCountries.reverse();
console.log(visitCountries);
//Sort the Array in an Alphabetical Order:
visitCountries.sort();
console.log(visitCountries);
//Change an Array in Reverse Alphabetical Order:
visitCountries.reverse();
console.log(visitCountries);
export {};
