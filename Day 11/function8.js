/*
Write a function named `getTeaMaker` that returns another function.
The returned function should take one parameter `teaFlavor` and return a string like "Brewing masala tea".
Store the returned function in a variable named `teaMaker`, and call it with `"masala"`.
*/

function getTeaMaker(teaType) {
    return function () {
        return (`Brewing ${teaType} tea!`);
    }
}

let teaMaker = getTeaMaker("masala");
let message = teaMaker();
console.log(message);
