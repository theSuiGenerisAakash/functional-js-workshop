module.exports = function(namespace) {
  return console.log.bind(namespace, [].slice.call(arguments));
};
