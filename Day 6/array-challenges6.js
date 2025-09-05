// Declare an array of popular teas which contain "green tea", "oolong tea", and "chai".
// Create a soft copy of the array and log both arrays.
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTea = popularTeas; //used popularTeas();
popularTeas.push("earl grey");
console.log(softCopyTea); 
console.log(popularTeas);
// My mistake: I thought softCopyTea would be a separate copy of popularTeas, but it references the same array.
