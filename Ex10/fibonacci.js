const fibonacci = function(number) {

  if(parseInt(number) === 0) {
    return 0;
  }

  if(parseInt(number) === 0) {
    return 1;
  }

  if(number < 0) {
    return "OOPS";
  }

const fib = [0, 1];

  for (let i = 2; i <= parseInt(number); i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[parseInt(number)];
};

// Do not edit below this line
module.exports = fibonacci;