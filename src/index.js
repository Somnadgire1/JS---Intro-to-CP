function add(a, b) {
    return a + b;
  }
  
  function greet() {
    let firstName = "Will";
    let lastName = "Smith";
    let age = 54;
    return `${firstName} ${lastName}'s age is ${age}.`;
  }
  
  function interpolate(n1, n2) {
    return `${n1} + ${n2} = ${n1 + n2}`;
  }
  
  function nuller() {
    return null;
  }
  
  function objectFactory(fname, age) {
    let obj = {};
    obj[fname] = age;
    return obj;
  }
  
  module.exports = {
    add,
    greet,
    interpolate,
    nuller,
    objectFactory
  };
  