// Create an object person with a method introduce() that uses this
// additionally add properties of name & age that will result in 
// Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

const person = {
    name: "Hitesh",
    age: 19.5,
    introduce() {
        const self = this;
        function inner() {
            return `Hi, my name is ${self.name} and I am ${self.age} years old`;
        }
        return inner();
    }
};
console.log(person.introduce());

// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

console.log(person.introduce());

function outer() {
    function inner() {
        return "Inner function called";
    }
    return inner();
}

console.log(outer());
