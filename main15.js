let guestList = ["ANMOL", "ARBAB ALI", "SADHANA", "SHEBI"];
let dnotCome = guestList[0];
console.log(dnotCome, "Nai A skti");
guestList.splice(0, 1, "VANDANA");
guestList.forEach(Guest => console.log(`Assaalam o alaikum ${Guest} Would you like to dinner with me?`));
export {};
