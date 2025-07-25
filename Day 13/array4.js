// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let result = removeDuplicates([1,2,3,4,4,2,6,1,7]);
console.log(result);
