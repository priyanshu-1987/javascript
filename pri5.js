let myDate=new Date()
console.log(myDate)//2026-07-14T21:15:45.166Z
console.log(myDate.toString())//Wed Jul 15 2026 02:45:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Wed Jul 15 2026
console.log(myDate.toLocaleString())//15/7/2026, 2:45:45 am
console.log(myDate.toLocaleDateString())//15/7/2026
console.log(myDate.toLocaleTimeString())// 2:45:45 am 
/*getTimezoneOffset() is a Date object method in JavaScript. It returns the difference, in minutes,
  between UTC (Coordinated Universal Time) and your local system time.*/
console.log(myDate.getTimezoneOffset())//-330
console.log(typeof myDate);//object
let myCreateDate1=new Date(2005,7)
console.log(myCreateDate1.toLocaleString());//1/8/2005, 12:00:00 am
let myCreateDate=new Date(2023,23,0)
console.log(myCreateDate.toLocaleString());//30/11/2024, 12:00:00 am
let myCreateDate2=new Date("2005-7-12")
console.log(myCreateDate2.toLocaleString());
let myTimeStamp=Date.now()
console.log(Math.floor(myTimeStamp/(1000*60*60*24*365)));//value in years
let newDate1=new Date()
console.log(newDate1.getDate());
console.log( newDate1.toLocaleString('default',{
    weekday:"long",
}
));





