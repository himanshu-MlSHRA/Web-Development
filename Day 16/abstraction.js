class coffeeMachine {
    start () {
        // You can do any task like call a DB , filter value etc
        return `Your coffee is started being made`;
    }

    brewCoffee () {
        //Complex calculation 
        return `Brewing coffee`;
    }

    pressStartButton () {
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1} \n${msg2}`
    }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
