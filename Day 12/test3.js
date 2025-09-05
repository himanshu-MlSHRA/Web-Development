// Write a function whatAmI that takes an input 
// and returns a string describing its type after conversion.
// If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
    console.log(`I'm a ${typeof(input)}`);
}
whatAmI(12);