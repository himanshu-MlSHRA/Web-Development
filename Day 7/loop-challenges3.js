// Write a 'do-while' loop that prompts a user to enter their favorite tea typeunt until they say 'stop'.
// Store the tea types in 'teaCollection' array.

let teaCollection = [];
let tea
do {
    tea = prompt  (`Enter your favorite tea types(type "stop" to finish)`)
    if (tea !== "stop") {
        teaCollection.push(tea)
    }
    
} while (tea !== "stop");

// This will only run in google -> inspect -> consol coz node js dont support prompt it as js thing on used in browser  