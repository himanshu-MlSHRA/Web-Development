// Declare an array of top cities which contain "Berlin", "Singapore", and "New York".
// Create a hardCopy which doesn't affect both arrays
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // Most used can used topCities.slice();
topCities.push("Tokyo"); 
console.log(hardCopyCities);
console.log(topCities);

