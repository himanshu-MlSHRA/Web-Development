// Write a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5]' and
// ad stop when it reaches the number 4.
// The loop should not include the number 4 in the output.
let numbers = [1, 2, 3, 4, 5];
let smallNumber = [];
// array is also an object
for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumber.push(num);  
}
console.log(smallNumber);
