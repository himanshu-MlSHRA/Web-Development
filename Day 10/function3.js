/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`.
The function should return the total cost by multiplying the `price` and `quantity`.  
Store the result in a variable named `totalCost`.
*/

// const calculateTotal = (price, quantity) => { If you have a one line code like here its just price * quantity 
//     return price * quantity;   
// }

const calculateTotal = (price, quantity) => price * quantity;   // This is called implisit return only valid for one lne code 
let totalCost = calculateTotal(499,100);
console.log(totalCost);
