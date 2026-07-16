const mySym=Symbol("key1")  // create a symbol
const JsUser={           //create object
    [mySym]:"mykey1",     //this is a way to represent symbol in a object
    name:"Priyanshu",
    age:21,
    location:"gorakhpur",
    email:"priyanshu@gmail.com",
    isLoggedIn:false,
    lastLogginDays:["Monday","Saturday"],
    "fullName":"Priyanshu kumar Gupta"
}
JsUser.greeting=function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);

console.log(JsUser.greeting());