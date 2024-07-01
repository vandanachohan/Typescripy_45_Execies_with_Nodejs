// Array of current Users
let current_users = ["Areeb","manjula","Vandana","ali","adnan"]

// Araay of New Array
let new_users = ["Paras","Ratna","Areeb","Pithvi","Vandana"]

// Loop though new_users to check for usernames avaiblilty
new_users.forEach(new_one_user =>{

    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())
   
    // Print Differant massage using if_Else Statmant
    if(our_condition){
        console.log(`Sorry ${new_one_user}, is already taken!`)
    }else{
        console.log(`This Username ${new_one_user}, is available`)
    }
})