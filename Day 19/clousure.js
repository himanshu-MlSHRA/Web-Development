// Clousure are functions
function outer() {
    let counter = 1;
    return function () {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());