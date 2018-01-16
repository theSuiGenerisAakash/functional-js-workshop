//let first = require('./upperCase');
//console.log("The string 'asb' should give 'ASB': ",first('asb')==='ASB');

//let second = require('./repeat');
//console.log("The function should be repeated thrice:", second(() => { console.log("Printing... "); }, 3) === 3);

//let third = require('./mapFunc');
//console.log("The function should return [2,4,6] for [1,2,3]: ", third([1,2,3]).toString() === "2,4,6");

let fourth = require('./getShortMessages.js');
let messagePass = { message : "Yes" };
let messageFail = { message : "hdashdhabdasbdasjdnbnjdansdhjdhasjdhasjdhajksdhajshdjkahdjahdjahajhjashajdhadhjasdhasjdhajsdhjashdjk" };
console.log("The function should return ", messagePass.message, " for two objects ", messagePass, " and  ", messageFail," : ", fourth([messagePass, messageFail]).toString() === "Yes"); 
