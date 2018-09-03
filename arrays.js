var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray (array, element) {
    const a = array;
    const b = [element, ...array];
    return b;
  }
  function destructivelyAddElementToBeginningOfArray (array, element) {
    var c = array;
    c.unshift(element);
    return c;
  }
  function addElementToEndOfArray (array, element) {
    const d = array;
    var e = [...array, element];
    return e;
  }
  