//Object literals
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
console.log(JsUser);
console.log(JsUser.email);//priyanshu@gmail.com
console.log(JsUser["email"]);//priyanshu@gmail.com
console.log(JsUser.fullName);//Priyanshu kumar Gupta
console.log(JsUser["fullName"]);//Priyanshu kumar Gupta
console.log(JsUser.mySym);//undefine
console.log(JsUser[mySym]);//mykey1

//Change value
JsUser.email="Atul@gmail.com"
console.log(JsUser.email);//Atul@gmail.com
console.log(JsUser);

//Lock value of Object
Object.freeze(JsUser)
JsUser.email="Rahul@gmail.com"
console.log(JsUser.email);//Atul@gmail.com
console.log(JsUser);




