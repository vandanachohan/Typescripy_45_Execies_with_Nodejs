// making function
function makeSandwich (...items: string[]){
    console.log("Making a sandwich the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 items  with 3 diffrent number of argument
makeSandwich("Chicken"," Mayo", "Chees", "Ege");

makeSandwich("Bread"," Butter");

makeSandwich("Met"," Double Chess", "tomato", "without Ege")