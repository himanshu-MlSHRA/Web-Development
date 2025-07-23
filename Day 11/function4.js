/*
4. Write a function named `processTeaOrder` 
that takes another function, `makeTea`, as a parameter 
and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/

function makeTea(typeOfTea) {
    return (`Make Tea: ${typeOfTea}`);
    
} 
function processTeaOrder(TeaFunction) {
    return TeaFunction("Earl grey")
}
let order = processTeaOrder(makeTea);
console.log(order);
