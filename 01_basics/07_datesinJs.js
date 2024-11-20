// Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 10, 20);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2024, 10, 20, 18, 39);
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2024-11-20");
// console.log(myCreatedDate3.toLocaleString());

// let myCreatedDate4 = new Date("11-20-2024");
// console.log(myCreatedDate4.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`Day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {
    weekday: "long"
});

