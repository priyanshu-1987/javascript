//Object literals
const mySym=Symbol("key1")  // create a symbol
const JsUser={          //create object
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
//Object.freeze(JsUser)
// JsUser.email="Rahul@gmail.com"
// console.log(JsUser.email);//Atul@gmail.com
// console.log(JsUser);



//Function
JsUser.greeting=function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
JsUser.greetingTwo=function(){
    console.log(`Hello JS user ,${this["fullName"]}`)
    console.log(`Hello JS user ,${this.fullName}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//Singletone Object
const tinderUser=new Object()
console.log(tinderUser);
tinderUser.id="123ab"
tinderUser.name="Priyanshu"
tinderUser.isLoggedIn=false
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123ab', 'Priyanshu', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123ab' ], [ 'name', 'Priyanshu' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true



const regularUser={
    email:"priyanshu@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Priyanshu",
            middleName:"Kumar",
            latName:"Gupta"
        }
    }
}
console.log(regularUser.fullName); //{userfullName: { firstName: 'Priyanshu', middleName: 'Kumar', latName: 'Gupta' }}
console.log(regularUser.fullName.userfullName);//{ firstName: 'Priyanshu', middleName: 'Kumar', latName: 'Gupta' }
console.log(regularUser.fullName.userfullName.firstName);//Priyanshu



//Merge Object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4={obj1,obj2,obj3}
console.log(obj4);
                    /*{
                            obj1: { '1': 'a', '2': 'b' },
                            obj2: { '3': 'a', '4': 'b' },
                            obj3: { '5': 'a', '6': 'b' }
                        }*/

const obj5=Object.assign({},obj1,obj2,obj3)
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//Use spread
const obj6={...obj1,...obj2,...obj3}
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users=[
    {
        username:"Priyanshu Kumar Gupta",
        id:100,
        email:"priyanshu@gmail.com"
    },
    {
        username:"Rahul",
        id:101,
        email:"rahul@gmail.com"
    },
    {
        username:"Rohan",
        id:103,
        email:"roham@gmail.com"
    }
]
console.log(users[2].username); //Rohan
console.log(users[0].email);//priyanshu@gmail.com





