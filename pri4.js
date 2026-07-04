//Operator
let value=3
let negValue=-value
console.log(negValue);
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**5)
console.log(4/2)
console.log(3%2)
let str1="hello"
let str2="priyanshu"
let str3=str1+" "+str2;
console.log(str3)
console.log("1"+2);
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(1+"2"+3)
//if first is number then they treate like number and if first is charector then they treate like charector
console.log(true);//true
console.log(+true);//1
console.log(+" ");//0
console.log(typeof " ");//string
console.log(typeof +" ");//number
console.log(+null);//0
console.log(typeof null);//object
console.log(typeof +null);//number
console.log(+undefined);//NaN
console.log(typeof undefined);//undefine
console.log(typeof +undefined);//number
let a,b,c
a=b=c=2
console.log(a+b+c)
let d=a+b+c
d++
console.log(++d);
//Comparison
console.log(2>1);//true
console.log(2>=1);//true
console.log(10==11);//false
console.log(2!=4);//true
console.log("2">1);//true        //javascript convert string to number for comparision
console.log("02">1);//true       //javascript convert string to number for comparision
console.log(null>0);//false      //javascript convert null to number(0) for comparision
console.log(null==0);//false     //== does not conver null to 0
console.log(null>=0);//true
console.log(null==undefined);//true     //JavaScript uses the special equality rule
console.log("2"===2);//false       //Strict Equality Operator(===) check both data type and value is same then true
//Symbol-->Every Symbol created with Symbol() is guaranteed to be unique, even if they have the same description.
const id=Symbol('123')
const anotherId=Symbol('123');
console.log(id===anotherId);//false
console.log(id==anotherId);//false
const bigNumber=727646462468n
console.log(bigNumber);//727646462468n
const heroes=["a","b","c"]
console.log(typeof heroes);//object

//Object
let myObj={
    name:"priyanshu",
    age:22,
}
console.log(myObj.name +","+ myObj.age);//priyanshu,22
const myFunction=function(){
    console.log("Hello World");
 }
console.log(typeof myFunction);//function
let myName="priyanshu"
let anotherName=myName;
console.log(anotherName);//priyanshu
anotherName="Atul"
console.log(anotherName);//Atul
console.log(myName);//priyanshu
let user1={
    email:"user1@gmai.com",
    upi:"user1@ybl",
}
let user2=user1;
user2.email="priyanshu@gamil.com"
console.log(user1.email);//priyanshu@gamil.com
console.log(user2.email);//priyanshu@gamil.com
const name="Priyanshu"
const id1=22
console.log(name+" "+id1+" "+"years old");//this is old formate we have best alternative formate
console.log(`my name is ${name} and my age is ${id1}`);
const name1=new String("Priyanshu_kumar_gupta")
console.log(name1);//[String: 'Priyanshu_kumar_gupta']
console.log(name1[0]);//P
console.log(name1.__proto__);//{}
console.log(name1.__proto__===String.prototype);//true
console.log(name1.toUpperCase()+","+ name1.charAt(2)+","+ name1.indexOf('i'));//PRIYANSHU_KUMAR_GUPTA,i,2
const name2=name1.substring(0,5)
console.log(name2);//Priya
console.log(name1.slice(-21,-12));//Priyanshu
console.log(name1.slice(-8,20));//ar_gupta
console.log(name1.slice(-1));//a
console.log(name1.slice(-2));//ta
console.log(name1.slice(-5));//gupta
const name3="     Ram    "
console.log(name3);//     Ram    
console.log(name3.trim());//Ram
const name4="priyanshu"
console.log(name4.replace('shu','ka'));//priyanka
console.log(name4.includes('priya'));//true
console.log(name1.split('_'));//[ 'Priyanshu', 'kumar', 'gupta' ]
const score =400;
console.log(score);//400
console.log(typeof score);//number
const balence=new Number(100)
console.log(balence);//[Number: 100]
console.log(balence.toString());//100
console.log(balence.toString().length);//3
console.log(balence.toFixed(2));//100.00
console.log(typeof balence);//object
const num=123.8673
console.log(num.toPrecision(2));//1.2e+2
console.log(num.toPrecision(3));//124
console.log(num.toPrecision(4));//123.9
const hundred=1000000
console.log(hundred.toLocaleString());//10,00,000
console.log(hundred.toLocaleString("en-IN"));//10,00,000
console.log(Math)//Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.3));//4
console.log(Math.ceil(4.3));//5
console.log(Math.floor(4.2));//4
console.log(Math.min(2,4,5,6,1))//1;
console.log(Math.max(2,3,4,5,6,6,9));//9
console.log(Math.random());//0<=value<1
console.log(Math.random()*10);//any value lie between 0 to 10
const min=10
const max=20
console.log(Math.random()*(max-min+1));//0 ≤ value < 11(in decimal)
console.log(Math.floor(Math.random()*(max-min+1)));//0 ≤ value < 11

















