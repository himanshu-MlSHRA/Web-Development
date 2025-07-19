// Declare an array of tea types which contain "herbal tea", "white tea", and "masala tea".
// Change the second element of the array to "jasmin tea" and log the updated array.
let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmin tea";
console.log(teaTypes); 
// My mistake: used let to chnange the second element of the array , which should not be used for reassignment.
//let teaTypes[1] = "jasmin tea"; also used 
//also took an const variable assigned it the second element and then tried to change it, which is not allowed.
