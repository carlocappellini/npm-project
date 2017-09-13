const $ = require("jquery");
const datas = require('./data.js');
const math = require('./math.js');
const message = require('./say-hello.js')
const hello = () => console.log("hello from webpack");

hello();
console.log(datas.whichSideOfTheForce); // outputs "The Dark Side"
console.log(math.add(9,9))
console.log(math.substract(9,7))
console.log(math.multiply(2,9))
console.log(math.divide(10, 2.5))

console.log(message)
$("body").html("<h1>Hello From Jquery</h1>");