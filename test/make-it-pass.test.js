var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  // your code to make the test pass goes here ...
  return a + b ;
}
function divide (a, b) {
  // your code to make the test pass goes here ...
  return a / b ;
}

test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('divide should return the dividtion of two numbers', function (t) {
  t.equal(3, divide(6, 2)); 
  t.end();
});