var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray (array, element) {
  const a = array;
  const b = [element, ...array];
  return a;
  }