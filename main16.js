// Creating a Guest List ARRAY
let guestList = ["ANMOL", "ARBAB ALI", "SADHANA", "SHEBI"];
// Making variable for those guest who cannt come
let dnotCome = guestList[0];
// print the name of Guest who cannot came
console.log(dnotCome, "nai a skti hun");
// Add or Remove Value from Guest List Array
guestList.splice(0, 1, "vandana");
// Message Print for Bigger Table
console.log("GOOD News ! We have Found a Bigger Table For Dinner.");
// Addding a new Guest at starting index of Array
guestList.unshift("ALI");
// Adding a new Guest at ending index of Array
guestList.push("hamza");
// Get a middle index of our Array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "ANNU");
// print massege of Updated list
console.log("Update List Of Our Guest");
// Sending a Invitation massege to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me!`));
export {};
