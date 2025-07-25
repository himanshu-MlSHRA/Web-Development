// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let result = sumOfN(5);
console.log(result);
