// In nonPrimitive if we make a const obj , we can change its values but not in primitive
const username = {
    firstname: "Himanshu",
    "middle name": "Ratnakar",
    isLoggedIn: true,
};

username.firstname = "Himanshu Mishra"; // this is allowed you can change the value of a property
username.lastname = "Mishra"; // this is also allowed, you can add new properties


console.log(username.firstname);
console.log(username.lastname);
console.log(username);
console.log(typeof username);
console.log(username["middle name"]); // you can access the variable with space in it using this syntax

//Date
let today = new Date();
console.log(today);

//Array
let names = ["Himanshu", "Piyush", "Rohit", ["Shivam", "Saurabh"]];
console.log(names[1]);
console.log(names[3][0]); //to print an array inside an array

//Type conversion
let isVAlue = "1";
console.log(isVAlue + 1); //beacuse isVAlue is a string, so js thinks the number 1 is also a string 

let Istrue = true;
console.log(Istrue + 1); //this will give 2 because true is converted to 1 in js

let isFalse = "2";
console.log(typeof Number(isFalse)); //number coz js convert the number (string) to number

let isFinished = "23wef";
console.log(Number(isFinished)); // its NaN because it cannot convert a string with letters to a number
console.log(typeof isFinished); // A string!

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN






