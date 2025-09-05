class Bird{
    fly () {
        return `Birds can fly.`
    }
}

class Penguin extends Bird {
    fly () {
        return `Penguin can't fly.`
    }
}

let bird1 = new Bird();
let penguin1 = new Penguin();

console.log(bird1.fly());
console.log(penguin1.fly());

// Static Method

class Calculator {
    static add(a, b) {
        return a + b
    }
}

// let cal = new Calculator();
// console.log(cal.add(2, 3)); You cannot print it by creating an object or a var

console.log(Calculator.add(2, 3)); // Directly class can call it 

