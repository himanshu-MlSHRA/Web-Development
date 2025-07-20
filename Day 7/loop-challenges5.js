// Write a 'for' loop that multiplies each element in the array [2, 4, 6] by 2 and store it in a new array named 'mulipliedNumber'

let number = [2, 4, 6];
let mulipliedNumber = [];


for (let i=0; i<number.length; i++) {
    mulipliedNumber.push(number[i]*2)
}

console.log(mulipliedNumber);
