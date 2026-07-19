function VotingAge(age){
    if(age<18){
        console.log("you are not eligible for voting");
        
    }else{
        console.log("you are eligible for voting");
        
    }
}
VotingAge(67)
const number=(num)=>{
    if(num%2===0){
        console.log("numer is even");
    }else{
        console.log("number is odd");
        
    }
}
number(46)

//switch
const MonthName=(month)=>{
    switch(month){
        case 1:
            console.log("january");
            break;
        
        case 2:
            console.log("febuary");
            break; 

        case 3:
            console.log("march");
            break;

        case 4:
            console.log("april");
            break;

        case 5:
            console.log("may");
            break;

        case 6:
            console.log("june");
            break;

        case 7:
            console.log("july");
            break;

        case 8:
            console.log("august");
            break;

        case 9:
            console.log("september");
            break;

        case 10:
            console.log("octuber");
            break;

        case 11:
            console.log("november");
            break;
        case 12:
            console.log("december");
            break;   
         
        default:
            console.log("chooes correct number");
                
    }
}
MonthName(12)


//Nullish coalescing operator (??):null undefine
let val1=5??10
console.log(val1);//5
let val3=null??10
console.log(val3);//10
let val4=null??10??15
console.log(val4);//10
let val5=null??"*"
console.log(val5);//*


//Terniary Operator
//Syntex --> (condition?true:false)
const myage=17;
(myage>=18)?console.log("eligible for voting"):console.log("not eligible for voting");

