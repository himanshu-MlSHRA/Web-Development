function* numberGenerator() {
    yield 1
    yield 2
    yield 3
}
// Generator function is created using function* and it instead of 'return' we write yield 

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
