// Write a for loop that lists all the cities in the array '["Paris", "New York", "Tokyo", "London"]' and 
//store each city in a new array called 'cityList'.

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cities.length; i++) {
    cityList.push(cities[i])   
}
console.log(cityList);
//If you want to reverse this array and store it then use 'unshift' can be used in LIFO methods
