// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }     
    }
    return max;
}
let result = findMax([1,2,3,84,65,4,34]);
console.log(result);
