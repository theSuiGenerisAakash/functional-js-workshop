/**
*/
function reduce(arrayRec, fn, initial) {
  if (arrayRec.length === 0) {
    return initial;
  }
  initial = fn(initial, arrayRec[0], 0, arrayRec);
  return reduce(arrayRec.slice(1), fn, initial);
  // if(arrayRec.length === 1){
  //   inital = fn(,arrayRec[0],0,arrayRec);
  //   return inital;
  // }
  //
  // let curr = arrayRec[arrayRec.length - 2];
  // let prev = arrayRec[arrayRec.length - 1];
  // initial = fn(prev,curr,arrayRec.length-2,arrayRec);
  // return reduce(arrayRec.slice(0,arrayRec.length-1), fn, inital);
}

module.exports = reduce;
