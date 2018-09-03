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
    const e = [...array, element];
    return e;
  }
  
  function destructivelyAddElementToEndOfArray (array, element) {
    var f = array;
    f.push(element);
    return f
  }
  
  