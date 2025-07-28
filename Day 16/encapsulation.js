class bankAccount {
    #balance = 0;

    deposit (amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance () {
        return `$${this.#balance}`;
    }
}

let account1 = new bankAccount();
account1.deposit(1000);
console.log(account1.getBalance());
