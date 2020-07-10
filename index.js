const counterObj = require("./myscript.js")

console.log(counterObj.getCounter()) // 0
counterObj.incrementCounter() // 0 + 1
console.log(counterObj.getCounter()) //1


const newCounterObj = require("./myscript.js")
console.log(newCounterObj.getCounter()) // because of the "require cache", instead of getting 0, we'll get 1"