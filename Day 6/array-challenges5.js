// Declare an array of tea orders which contain "chai", "iced tea", "matcha", and "earl grey".
// Remove the last element from the array and store it in a variable called lastOrder using pop method.
let teaOrder = ["chai", "iced tea","matcha", "earl grey"];
const lastOrder =  teaOrder.pop(); 
console.log(teaOrder);
console.log(lastOrder);
// My mistake: used teaOrder.pop() = lastOrder;
// instead of const lastOrder = teaOrder.pop(); to store the popped element.
