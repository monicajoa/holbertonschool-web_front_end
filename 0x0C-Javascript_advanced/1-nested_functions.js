#!/usr/bin/node

let globalVariable = 'Welcome';

function outer() {
  console.log(globalVariable);
  let course = 'Holberton';
  function inner() {
    console.log(globalVariable + ' ' + course);
    let exclamation = '!';
    function inseption() {
      console.log(globalVariable + ' ' + course + exclamation);
    }
    inseption();
  }
  inner();
}
outer();
