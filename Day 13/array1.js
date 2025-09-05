// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
}
let result = filterNumbers([1, 'hello', 3.14, true, null, 42]); 
console.log(result);
