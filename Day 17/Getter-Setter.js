class Employee {
    #salary;
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value < 0) {
            console.log(`Invalid salary. Salary cannot ${value}`);
        } else {
            this._salary = value;
        }
    }
}

let emp = new Employee("John Doe", 50000);
console.log(emp.salary);
emp.salary = -60000; 
