// This is simply : Inheritance being done in the prototypes
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name}`);
}

let myname = new Person("Himanshu");
myname.greet();

// Object inherit properties from other object via a prototype chain (here Person.prototype is a chain) 