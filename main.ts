//creating array
let username =["hina","maria","nimra","admin","saba"];

//using foreach loop on array
username.forEach(oneuser => {
    if(oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to a status report? `)
    }
    else{
        console.log(`hello ${oneuser}, thank you for logging in again`)
    }
}) 

