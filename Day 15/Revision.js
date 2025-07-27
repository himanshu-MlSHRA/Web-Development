let car = {
    name : "Toyota",
    model : "Camry",
    year : 2020,
    start : function () {
        return `${this.name}'s model ${this.model} was started in ${this.year}`
    }
};
console.log(car.start());

function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person ("Jhon Doe", 20);
console.log(john.name);

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} speaks alot`
}

Array.prototype.anshu = function () {
    return `Custom method: ${this}`
}

let myArray = [1, 2, 3, 4, 5]
console.log(myArray.anshu());


let myNewArray = [1, 2, 3, 4, 5, 6, 7]
console.log(myNewArray.anshu());

