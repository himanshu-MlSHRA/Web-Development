// Write a function flipBoolean that takes any input 
// and converts it to its boolean equivalent, 
// then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
    return !Boolean(input);
}
let result = flipBoolean(true);
console.log(result);
