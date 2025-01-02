const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;

  for(let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};