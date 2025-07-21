/*
9. Write a `for` loop that iterates through the array 
`[2, 5, 7, 9]`.
    Skip the value `7` and multiply the rest by 2. Store 
the results in a new array named `doubledNumbers`.
*/

let number = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < number.length; i++) {
    if(number[i] === 7) {
        continue;
    }
    doubledNumbers.push(number[i] * 2);
}
console.log(doubledNumbers);
