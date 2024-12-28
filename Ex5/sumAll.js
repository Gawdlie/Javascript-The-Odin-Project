const sumAll = function(num1, num2) {
  let total = 0;

  if(num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if(Number.isInteger(num1) && Number.isInteger(num2)) {
    if(num1 < num2) {
      while(num1 <= num2) {
        total += num1;
        num1++;
      }
    }
    else {
      while(num2 <= num1) {
        total += num2;
        num2++;
      }
    }
  }
  else {
    return "ERROR";
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;