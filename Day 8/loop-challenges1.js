// Write a for loop contianing the array '["green tea", "black tea", "chai", "oolong tea"]' and
// and store all the elements in a new array called 'selectedTea' until it reaches "chai".
// If "chai" is reached, the loop should stop and not include "chai" in the new array.
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTea = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {       //used == instead of ===
        break;
    }
    selectedTea.push(teas[i]);
}
console.log(selectedTea);
