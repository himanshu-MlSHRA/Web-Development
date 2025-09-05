function Person(name , age) {
    this.name = name
    this.age = age
}

function Car(name, model) {
    this.name = name
    this.model = model
}

let myCar = new Car("Toyota","Camry");
console.log(myCar);

let myNewCar =  new Car("Tata", "Neno");
console.log(myNewCar);

function Tea(types) {
    this.types = types;
    this.desc = function () {
    return `This is a cup of ${this.types}`;
    }    
}
let myTea = new Tea("lemon tea");
console.log(myTea.types, myTea.desc());

function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let myAnimal = new Animal("Dog")
console.log(myAnimal.sound());

let MyCat = new Animal("Cat")
console.log(MyCat.sound());

function Drink(name) {
    if(!new.target){
        throw new Error("You should use new keyword before called the function");
        
    }
    this.name = name
}
let myDrink = Drink("Water");
console.log(myDrink);
