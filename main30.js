// creating a Array
let userNames = ["hamza alvi", "Arbab", "Anmol", "Vandana", "Admin"];
// using ForEach Loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, Would you like a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, Thank you for loggin again.`);
    }
});
export {};
