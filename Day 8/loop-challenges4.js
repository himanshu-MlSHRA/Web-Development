// Write a 'for-of' loop to iterate through the array '["chai", green tea", "herbal tea", "black tea"]' and
//skips the 'herbal tea' and store all the elements in a new array called 'preferredTeas'
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea)
}
console.log(preferredTeas);
