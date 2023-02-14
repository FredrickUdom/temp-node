//MODULES - Encapsulated code (only share minimum)
//COMMONJS - every file NODE is a module (by default)
// const value = require('./require1')
const names = require('./name1');
required = require('./require1');
const sayHi = require('./arrowfunc');
const persons = require('./person')

sayHi('freddy')
sayHi(names.deborah)
sayHi(names.udom)
console.log(persons.allPersons)
console.log(persons.products)
// console both the items arrays and the human objects
console.log(persons)


