// Making a Funtion

function make_shirt(size:string = "large", printMassege:string = " I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMassege} print on shirt`);
}

// Called a funtion with by_default value
make_shirt();

// Creating a function new with medium size and by_difault massege
make_shirt("Meduim")

// Caaled a function now with small and also Diffrent print massege
make_shirt("small","I Love Javascript")