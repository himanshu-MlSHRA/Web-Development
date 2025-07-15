//Number 
let num1 = 120;
console.log(typeof num1);

// Number is converted to Object

let newNum = new Number(120); 
console.log(typeof newNum);

//Boolean
let isActive = true;
console.log(typeof isActive);

isReallyActive = new Boolean(true); // Boolean is converted to Object (Not recommended)
console.log(typeof isReallyActive);

//Null and Undefined
let firstName;  // let firstName = undefined; (same output)
console.log(firstName); 

let lastName = null;
console.log(lastName);

//String
let myString = "Hello";
let myString1 = "Hola"
let username = 'Himanshu';

let greetMessage = `Greetings ${username}!`; //String interpolation
console.log(greetMessage);

//Symbol 
let sm1 = Symbol("Anshu");
let sm2 = Symbol("Anshu");
//Even though both symbols have the same name but they are unique (Symbols are always unique)
console.log(sm1 === sm2); // false, each symbol is unique
console.log(sm1);    