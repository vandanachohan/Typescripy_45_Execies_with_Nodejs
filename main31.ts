// creating a Array with 5 Value
let userNames = ["hamza alvi","Arbab","Anmol","Vandana","Admin"];

// Remove All Values From Our Array Now Our Array is Empty
userNames =[]
 
// If Statment for checking Lenght of our Array is Empty?
if(userNames.length === 0){
    console.log("Your Array in Empty We need to fine sone users!") 
}else {
    // If Array is not Empty Use ForEach Loop on Array
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, Would you like a status report?`)
        }else{
            console.log(`Hello ${oneUser}, Thank you for loggin again.`)
        }
    })
}