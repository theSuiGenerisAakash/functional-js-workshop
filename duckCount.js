function duckCount() {
  // SOLUTION GOES HERE
  console.log(arguments);
  let lengthArgs = Object.keys(arguments).map(function(key){
      console.log(arguments);
      if(arguments[key].hasOwnProperty('quack'))
        return arguments[key];
  });
  console.log(lengthArgs.length);
}

console.log(duckCount({'quack': true})===[{ '0' : {"quack": true}}]);

// function duckCount() {
//   // SOLUTION GOES HERE
//   let args = [].slice.call(arguments);
//   let numberOfOwnQuacks = args.filter(function(arg){
//     return Object.prototype.hasOwnProperty.call(arg, 'quack') ;
//   });
//   return numberOfOwnQuacks.length;
// }
//
//  module.exports = duckCount
