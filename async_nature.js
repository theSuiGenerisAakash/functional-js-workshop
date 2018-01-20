/**
@param {function} operation
@param {number} num
*/
function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return;
    operation();
    // console.log("once");
    setTimeout(function() {
        console.log('inside setTimeout');
        return repeat(operation, --num);
    });
}

// for(let i=0;i<100;i++){
// console.log("Hi again");
// }
// repeat(function(){
//   for(let i=0;i<10;i++){
//   console.log("Wait");
//   }
// }, 100);
module.exports = repeat;
