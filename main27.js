// Define Variable
let alienColor = "green";
// First Version Using If and Else 
if (alienColor === "green") {
    console.log(" Version 1! you shot down alien you have earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("you shot down alien you have 10 points.");
}
else if (alienColor === "red") {
    console.log("you shot down alien you have 15 points");
}
// Second Version
let alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien you have earned 5 points.");
}
else if (alienColor2 === "yellow") {
    console.log(" Version 2! you shot down alien you have earned 10 points.");
}
else if (alienColor2 === "red") {
    console.log("you shot down alien you have 15 points");
}
// Third Version
let alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shot down green alien you have earned 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log(" you shot down alien you have earned 10 points.");
}
else if (alienColor3 === "red") {
    console.log(" Version 3! you shot down alien you have  earned 15 points.");
}
export {};
