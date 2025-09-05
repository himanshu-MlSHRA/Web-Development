let mac ={cpu: 12}
let lenovo = {
    screen: "HDR",
    __proto__: mac  // this __proto__ is older way
};
let acer ={}

console.log(`lenovo `,lenovo.__proto__); 