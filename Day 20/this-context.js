const person = {
    name : "Himanshu",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction()

const boundGreet = person.greet.bind({name : "Aryan"});
boundGreet();

// Study bind, call and apply.
