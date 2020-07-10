const counterObj = require("./myscript.js")

console.log(counterObj.getCounter()) // 0
counterObj.incrementCounter() // 0 + 1
console.log(counterObj.getCounter()) //1


const newCounterObj = require("./myscript.js")
console.log(newCounterObj.getCounter()) 

// to debug using chrome://inspect,
// type in your terminal: node --inspect-brk index.js