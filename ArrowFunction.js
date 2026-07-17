//Arrow Function
// Syntex-->
// (parameter)=>{
//     //write code
// }

const user={
    username:"Priyanshu",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcom to website`);
        console.log(this)
    }
}
// user.welcomeMessage() //Priyanshu , welcom to website
// user.username="Sam"
// user.welcomeMessage()//Sam , welcom to website
// console.log(this);//{}

// function chai(){
//     console.log(this);
    
// }
// chai()
 function chai1(){
    let username="Priyanshu"
    console.log(this.username);//undefined
    console.log(username);//Priyanshu
}
// chai1()

const chai2=()=>{
    let username="Priyanshu"
    console.log(this.username);//undefined
    console.log(this);//{}
    console.log(username);//Priyanshu
}
//chai2()

const addTwo1=(num1,num2)=>{
    return num1+num2
}
//console.log(addTwo1(5,9));//14



//Implicite return 
const addTwo2=(num1,num2)=>(num1+num2)
console.log(addTwo2(5,2));//7

//Object return 
const addTwo3=(num1,num2)=>({
    username:"Priyanshu"
});
console.log(addTwo3());//{ username: 'Priyanshu' }
console.log(addTwo3().username);//Priyanshu



//Immediately Invoke Function Expression(IIFE)
(function chai3(){
    console.log(`DB CONNECTED`);
    
})(); //DB CONNECTED

(()=>{
     console.log(`DB CONNECTED TWO`);
})();
((name)=>{
     console.log(`DB CONNECTED TWO ${name}`);
})("Priyanshu");