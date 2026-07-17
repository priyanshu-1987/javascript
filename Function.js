//Function
function sayMyName(){
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}
sayMyName()


function addTwoNumber(num1,num2){
    console.log(num1+num2)
}
addTwoNumber(3,"7") //37
addTwoNumber(3,9)
//If a function does not return anything explicitly,it automatically returns undefined. It's mean const result=undefined
const result=addTwoNumber(3,7)
console.log("Result: ",result);


function addNumber(num1,num2){
    let result=num1+num2
    return result
    console.log("Priyanshu"); //unreachable code. because after return statement function is end 
}
const result1=addNumber(3,5)
console.log(result1);


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Priyanshu"));//Priyanshu just logged in
console.log(loginUserMessage());//undefined just logged in

function logInUserMessage1(username){
    if(!username){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`
}
console.log(logInUserMessage1());//please enter username
console.log(logInUserMessage1("Priyanshu"));//Priyanshu just logged in


//Use ret Operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));//[ 200, 300, 400 ]

function calculateCartPrice1(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice1(200,300,400,500,600));//[ 400, 500, 600 ]


//using Object
const user={
    username:"Priyanshu",
    price:99
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` );
    
}
handleObject(user) //username is Priyanshu and price is 99
handleObject({          
    username:"Rahul",
    price:9
}) //username is Rahul and price is 9
const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));//300
console.log(returnSecondValue([0,4,6,7,8,9]));//4


//Scopes

//global
let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);

if(true){
    //local
    let d=10
    const e=20
    var f=30
}
//console.log(d);  //error
//console.log(e);//error
console.log(f); //30

let g=100
if(true){
    let g=300;
    console.log("Inner: ",g); 
}
console.log(g);
 function one(){
    const username="Priyanshu"
    function two(){
        const website="youtube"
        console.log(username+" "+website);
        
    }
    //console.log(website);//error
    two()
 }
//one()
if(true){
    const username="Priyanshu"
    if(username=="Priyanshu"){
        const website="youtube"
        console.log(username +" "+ website);
        
    }
    //console.log(website); //error website is local variable
    
}
//console.log(username);//error username is local variable


console.log(addone(7));
function addone(num){
    return num+1
}
console.log(addone(0));


//console.log(addTwo(5));//error because addTwo print before declaretion .addTwo is not a function declaration.It is a function expression.


const addTwo=function(num){
    return num+2
}
console.log(addTwo(5));




