// Define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "cherry", "orange"];

// Test for  equality  and inequality with Strings

console.log("Is apple is equal to apple");
console.log(apple == "apple");


console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");

// Test using lowercase and uppercase Funtion
console.log("\nIs APPLE is not apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs  Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");


// Numerical Tests

// Equal to
console.log("\n Is ten is equal to twenty")
console.log(ten == twenty);

// NOT Equal to
console.log("\nIs ten not equal to 20");
console.log(ten != twenty);

// Greator than
console.log("\nIs ten greator than 5");
console.log(ten > 5);

// less than
console.log("\n twenty is less than 10");
console.log(twenty < 10);

// Greator than or Equal to
console.log("\nIs ten is greator than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);


// Test using "and" $ "or" Operators

// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 30);


// Using || (OR)
console.log("\n 20 is greator than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is less than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

// check  include the orange  my fruits array
console.log("\nIs orange included in my fruits array?");
console.log(fruits.includes("orange"));

// Not included orange my fruits array
console.log("\nIs orange  not included in my fruits array?");
console.log(!fruits.includes("orange"));
