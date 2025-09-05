let generalCar = {tyres : 4}
let tesla = {
    driver : "AI"

}
Object.setPrototypeOf(tesla, generalCar)
console.log(`Tesla`, Object.getPrototypeOf(tesla));
