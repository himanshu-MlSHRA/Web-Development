// Write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo", "London"]' and
//skip "Paris" and print the rest of the cities in a new array called 'visitedCities'.

let cities = ["Paris", "New York", "Tokyo", "London"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] != "Paris") {
        visitedCities.push(cities[i]);
    }
}
console.log(visitedCities);
// I should have been used continue and make the if condi === but it works.
//continue is like skips a iteration