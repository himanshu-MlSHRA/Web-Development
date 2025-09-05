class Vehicle {
    constructor(name, model) {
        this.name = name
        this.model = model;
    }
    start() {
        return `${this.name} is a car from ${this.model}`; 
    }
}

class Car extends Vehicle {
    drives() {
        return `${this.name} can be accessed : This is Inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drives());

let Vehicle1 = new Vehicle("Toyota", "Corolla");
console.log(Vehicle1.name);

