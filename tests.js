//let first = require('./upperCase');
//console.log("The string 'asb' should give 'ASB': ",first('asb')==='ASB');

let second = require('./repeat');
console.log("The function should be repeated thrice:", second(() => { console.log("Printing... "); }, 3) === 3);
