// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let result = countVowels("Himanshu Mishra");
console.log(result);
