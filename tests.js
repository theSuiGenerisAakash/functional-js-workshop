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
// console.log("The array ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'] should return { Apple : 2, Durian : 3, Banana : 1}: ", JSON.stringify(fifth(inputWords)) === '{"Apple":2,"Banana":1,"Durian":3}' );
// console.log("The array [] should return {}: ", JSON.stringify(fifth(inputWords2)) === '{}');
// console.log("The array ['', ''] should return { '' : 2}: ", JSON.stringify(fifth(inputWords3)) === '{"":2}');
// console.log("The array ['Apple', 'Banana', 'Apple', 'durian', 'Durian', 'Durian'] should not return { Apple : 2, Durian : 3, Banana : 1}: ", JSON.stringify(fifth(inputWords4)) !== '{"Apple":2,"Banana":1,"Durian":3}');

let seventh = require('./recurProg');
let arrayRec = ['Apple', 'Banana', 'Apple'];
let func1 = function(prev, curr, index, arrayRec){ return prev + curr; };
console.log("The  function ", func1," should return 'AppleBananaApple' for the array ", arrayRec, " : ", JSON.stringify(seventh(arrayRec, func1, "")) === JSON.stringify("AppleBananaApple"));
// console.log("The array [] should return {}: ", JSON.stringify(fifth(inputWords2)) === '{}');");
