//Array
 const myarr=[0,1,2,3,4,"hello",true]
console.log(myarr[5]);
console.log(myarr[6]);
console.log(myarr[4]);
const myarr2=new Array(1,2,3,4)

//Array Method
myarr.push(6)
myarr.push(7)
console.log(myarr);
myarr.pop()
console.log(myarr);
myarr.unshift(9)     //push element at first position
console.log(myarr);
myarr.shift()        //pop first element of array
console.log(myarr);
console.log(myarr.includes(9));//find element present or not
console.log(myarr.indexOf("hello"));
const newarr=myarr.join(")/(");//this is a string
console.log(myarr);//[ 0, 1, 2, 3, 4, 'hello', true, 6 ]
console.log(typeof myarr);//object
console.log(newarr);//0)/(1)/(2)/(3)/(4)/(hello)/(true)/(6
console.log(typeof newarr);//string

//slice()-->slice() returns a new array containing a portion of the original array.It never changes the original array.
console.log(myarr);//[ 0, 1, 2, 3, 4, 'hello', true, 6 ]
const myn1=myarr.slice(1,6);
console.log(myn1);//[ 1, 2, 3, 4, 'hello' ]
const myn2=myarr.slice(4)
console.log(myn2);//[ 4, 'hello', true, 6 ] 
const myn3=myarr.slice()  // it's create a shallow copy of array
console.log(myn3);//[ 0, 1, 2, 3, 4, 'hello', true, 6 ]
const myn4=myarr.slice(-4)
console.log(myn4);//[ 4, 'hello', true, 6 ]


/*splice()-->splice() changes the original array.It can:Remove elements,Insert elements,Replace elements
syntex od spice--> array.splice(start, deleteCount, item1, item2, ...) where,
start → Starting index.
deleteCount → Number of elements to remove.
item1... → Optional items to insert.*/
console.log(myarr.length);
console.log(myarr);
const myn5=myarr.splice(2,6,"Priyanshu")
console.log(myn5);
console.log(myarr);


const marvel_heroes=["thar","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
//marvel_heroes.push(dc_heroes)
console.log( marvel_heroes);//[ 'thar', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heroes[3][2]);//batman
const allHeros=marvel_heroes.concat(dc_heroes);
console.log(allHeros);//[ 'thar', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
 
 //use spread
const all_new_heros=[...marvel_heroes,...dc_heroes]
console.log(all_new_heros);//[ 'thar', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(another_array);
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

//Array.isArray-->to check "Is the given value an array?"
console.log(Array.isArray("Priyanshu")) //false 
console.log(Array.from("Priyanshu"))
console.log(Array.from({name:"Priyanshu"})) //[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


 
 
 
 











