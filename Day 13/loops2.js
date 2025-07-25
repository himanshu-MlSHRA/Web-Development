// printMultiplicationTable(n) that returns the multiplication table for n.
//  Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${n} * ${i} = ${n * i}`);
    }
    return table;
}

let result = printMultiplicationTable(22);
console.log(result);
