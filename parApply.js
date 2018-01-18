
function logger(namespace) {
  // SOLUTION GOES HERE}
  return function(){
    let args = [].slice.call(arguments);
    args.unshift(namespace);
    console.log.apply(null, args);
  }
}

module.exports = logger;
