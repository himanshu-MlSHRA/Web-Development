/*
Write a function named `makePizza` that takes one parameter `flavor`.
The function should return a string like "Making pepperoni pizza".
Store the result in a variable named `pizzaMessage`.
*/

function makePizza(flavor) {
    return (`Making ${flavor}`);
}
let pizzaMessage = makePizza("pepperoni pizza");
console.log(pizzaMessage);
