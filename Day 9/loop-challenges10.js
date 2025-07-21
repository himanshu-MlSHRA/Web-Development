/*
10. Use a `for-of` loop to iterate through the array 
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea name is 
greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/

let teaTypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaTypes) {
    if (tea.length > 10) { //used !== and teaTypes[tea] !== 10
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas);

