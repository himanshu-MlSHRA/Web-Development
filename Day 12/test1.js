// Write a function stringToNumber that takes a string input and tries to convert it to a number.
// If the conversion fails, return "Not a number".

function stringToNumber(input) {
    const num = Number(input);
    if (isNaN(num)) {
        return "Not a number";
    } else {
        return num;
    }
}

console.log(stringToNumber("42"));      
console.log(stringToNumber("hello"));   