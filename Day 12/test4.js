// Write a function isItTruthy that takes an input and returns "It's truthy!"
// if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
function isItTruthy(value) {
    if (value) {
        return "It's truthy";
    } else {
        return "It's falsey!"
    }
}
console.log(isItTruthy(1));

