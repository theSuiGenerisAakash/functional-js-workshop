// let first = require('./upperCase');
// console.log("The string 'asb' should give 'ASB': ",first('asb')==='ASB');

// let second = require('./repeat');
// console.log("The function should be repeated thrice:", second(() => { console.log("Printing... "); }, 3) === 3);

// let third = require('./mapFunc');
// console.log("The function should return [2,4,6] for [1,2,3]: ", third([1,2,3]).toString() === "2,4,6");

/* let fourth = require('./getShortMessages.js');
let messagePass = { message : "Yes" };
let messageFail = { message : "hdashdhabdasbdasjdnbnjdansdhjdhasjdhasjdhajksdhajshdjkahdjahdjahajhjashajdhadhjasdhasjdhajsdhjashdjk" };
let messagePass2 = { message : "Aakash", blablabla : 3 };
console.log("The function should return ", messagePass.message, " for two objects ", messagePass, " and  ", messageFail," : ", fourth([messagePass, messageFail]).toString() === "Yes");
console.log("The function should return ", messagePass.message, " and ", messagePass2.message, " for three objects ", messagePass, ", ", messagePass2, " and  ", messageFail," : ", fourth([messagePass, messageFail, messagePass2]).toString() === "Yes,Aakash"); */

// let fifth = require('./closureProg');
// let testUsers = [{ id : 1 }, { id : 12, randomm : "das" }];
// let testUsers1 = [{ id : 1 }, { id : 3 }];
// let testUsers2 = [{ id : 1 }, { id : 2 }, { id : 3 }, { id : 4 }];
// let testUsers3 = [];
// let goodUsers = [{ id : 1 }, { id : 2}, { id : 3 }];
// console.log("The function returned should return", false," for the given list", testUsers," : ", fifth(goodUsers)(testUsers) === false );
// console.log("The function returned should return", true," for the given list", testUsers1," : ", fifth(goodUsers)(testUsers1) === true );
// console.log("The function returned should return", false," for the given list", testUsers2," : ", fifth(goodUsers)(testUsers2) === false );
// console.log("The function returned should return", true," for the given list", testUsers3," : ", fifth(goodUsers)(testUsers3) === true );

// let sixth = require('./reduceProg');
// let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
// let inputWords2 = [];
// let inputWords3 = ['', ''];
// let inputWords4 = ['Apple', 'Banana', 'Apple', 'durian', 'Durian', 'Durian'];
// console.log("The array ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'] should return { Apple : 2, Durian : 3, Banana : 1}: ", JSON.stringify(sixth(inputWords)) === '{"Apple":2,"Banana":1,"Durian":3}' );
// console.log("The array [] should return {}: ", JSON.stringify(sixth(inputWords2)) === '{}');
// console.log("The array ['', ''] should return { '' : 2}: ", JSON.stringify(sixth(inputWords3)) === '{"":2}');
// console.log("The array ['Apple', 'Banana', 'Apple', 'durian', 'Durian', 'Durian'] should not return { Apple : 2, Durian : 3, Banana : 1}: ", JSON.stringify(sixth(inputWords4)) !== '{"Apple":2,"Banana":1,"Durian":3}');

// let seventh = require('./duckCount');
// console.log("Given two objects with own properties 'quack' and one with inherited property 'quack', the function should return 2: ", seventh({quack:true}, {quack: true}, Object.create({quack:false} )) === 2);
// console.log("Given two objects with own properties 'quack' and one empty object, the function should return 2: ", seventh({quack:true}, {quack: true}, {}) === 2);

// let eight = require('./parApply');
// console.log("Given a non-empty string 'Aakash', it should print INFO: Aakash", eight('INFO')('Aakash') === undefined ? "" : "" );
// console.log("Given an empty string', it should print INFO:", eight('INFO')('') === undefined ? "" : "" );
// console.log("Given nothing', it should print undefined", eight()() === undefined ? "" : "" );
// console.log("Given two strings 'Aakash' and 'Verma', it should print undefined Aakash Verma", eight()('Aakash','Verma') === undefined ? "" : "" );
// console.log("Checking if function was returned:", typeof(eight()) === 'function');


// const nine = require('./withBind');
// console.log("Given a non-empty string 'Aakash', it should print INFO: Aakash", nine('INFO')('Aakash') === undefined ? "" : "" );
// console.log("Given an empty string', it should print INFO:", nine('INFO')('') === undefined ? "" : "" );
// console.log("Given nothing', it should print undefined", nine()() === undefined ? "" : "" );
// console.log("Given two strings 'Aakash' and 'Verma', it should print undefined Aakash Verma", nine()('Aakash','Verma') === undefined ? "" : "" );
// console.log("Checking if function was returned:", typeof(nine()) === 'function');
