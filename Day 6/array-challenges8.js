// Declare an array of European cities which contain "Paris" and "Rome".
// Declare an array of Asian cities which contain "Tokyo" and "Bangkok".
// Concatenate both arrays and store the result in a variable called worldCities.
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let amazingCities = ["London", "Berlin"];
let worldCities = europeanCities.concat(asianCities); 
console.log(worldCities);
// My mistake : Used worldCIties = europeanCIties + asianCities; 
// after that used worldCIties = [europeanCIties,asianCities]; 