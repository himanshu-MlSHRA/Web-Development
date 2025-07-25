// Write a function squareNumbers(arr) using map() and arrow functions
const squareNumbers = arr => arr.map(num => num * num);

console.log(squareNumbers([1, 2, 3, 4]));

// Create a function filterEvenNumbers(arr) using filter() and arrow functions
const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
const sumPositiveNumbers = arr => 
  arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);

console.log(sumPositiveNumbers([-1, 2, 3, -4, 5]));

// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
const getNames = arr => arr.map(obj => obj.name);

console.log(getNames([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]));

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
const findLongestWord = arr => 
  arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');

console.log(findLongestWord(['apple', 'banana', 'cherry', 'date']));
