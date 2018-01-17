//let first = require('./upperCase');
//console.log("The string 'asb' should give 'ASB': ",first('asb')==='ASB');

//let second = require('./repeat');
//console.log("The function should be repeated thrice:", second(() => { console.log("Printing... "); }, 3) === 3);

//let third = require('./mapFunc');
//console.log("The function should return [2,4,6] for [1,2,3]: ", third([1,2,3]).toString() === "2,4,6");

/*let fourth = require('./getShortMessages.js');
let messagePass = { message : "Yes" };
let messageFail = { message : "hdashdhabdasbdasjdnbnjdansdhjdhasjdhasjdhajksdhajshdjkahdjahdjahajhjashajdhadhjasdhasjdhajsdhjashdjk" };
let messagePass2 = { message : "Aakash", blablabla : 3 };
console.log("The function should return ", messagePass.message, " for two objects ", messagePass, " and  ", messageFail," : ", fourth([messagePass, messageFail]).toString() === "Yes");
console.log("The function should return ", messagePass.message, " and ", messagePass2.message, " for three objects ", messagePass, ", ", messagePass2, " and  ", messageFail," : ", fourth([messagePass, messageFail, messagePass2]).toString() === "Yes,Aakash"); */

let fifth = require('./closureProg');
let testUsers = [{ id : 1 }, { id : 12, randomm : "das" }];
let goodUsers = [{ id : 1 }, { id : 2}, { id : 3}];
console.log("The function returned should return", false," for the given list", testUsers," : ", fifth(goodUsers)(testUsers) === false );
