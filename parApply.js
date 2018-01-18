
function logger(namespace) {
  // SOLUTION GOES HERE}
  return function(){
    let args = [].slice.call(arguments);
    let args1 = args.unshift(namespace);
    console.log.apply(null, args);
  }
}

module.exports = logger;
