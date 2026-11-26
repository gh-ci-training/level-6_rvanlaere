const { sayHello } = require('./lib')

console.log(sayHello('Node'))
console.log('Flag: ' + process.env.FLAG.split('').reverse().join(''))
