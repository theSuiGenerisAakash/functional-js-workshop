function reduceFunc(inputWords) {
  return inputWords.reduce((stringAccumulator, currentString) => {
 stringAccumulator[currentString] = stringAccumulator[currentString]+1 || 1; return stringAccumulator;
}, {});
}
module.exports = reduceFunc;

// initialValue[Optional]
// Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
