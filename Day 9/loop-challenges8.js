/*
8. Write a `forEach` loop that iterates through the array 
`["Berlin", "Tokyo", "Sydney", "Paris"]`.
    Skip `"Sydney"` and store the other cities in a new 
array named `traveledCities`.
*/
let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

worldCities.forEach(city => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city)
});
console.log(traveledCities);

//My mistake: 1. used traveledCities[city] = worldCities[city] to push 
//2. used if(worldcitied[city] === "Sydney") instead of if (city === "Sydney") 
