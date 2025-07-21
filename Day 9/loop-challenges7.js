/*
7. Write a `forEach` loop that iterates through the array 
`["earl grey", "green tea", "chai", "oolong tea"]`.
💡 Stop the loop when `"chai"` is found, and store all 
previous tea types in an array named `availableTeas`.
*/

let teaTypes= ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaTypes.forEach(function (tea)  {
    if (tea === "chai") {
        return;  //break is not used in this as we are not totally in a loop (we are) but we are in a function 
                 //function don't support break it support return     
    }
    availableTeas.push(tea);
});

console.log(availableTeas);
