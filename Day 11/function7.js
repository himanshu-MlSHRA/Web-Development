/*
Create a function named `welcomeUser` that takes one parameter, `username`.
Inside the function, create another function called `generateMessage` that returns a message like "Welcome, Aryan!".
Call `generateMessage` inside `welcomeUser` and return the message.
Store the final result in a variable called `welcomeMessage`.
*/

function welcomeUser(username) {
    function generateMessage() {
        return (`Welcome, ${username}`);
    }
    return generateMessage();
}

let welcomeMessage = welcomeUser("Aryan");
console.log(welcomeMessage);
