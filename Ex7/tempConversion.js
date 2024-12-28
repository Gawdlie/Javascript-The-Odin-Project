const convertToCelsius = function(temp) {
  let formula = (temp - 32) * (5/9);

  if(Math.ceil(temp) === temp) {
    formula = Math.round(formula * 10) / 10;
    return formula;
  }
  else {
    formula = Math.round(formula * 10) / 10;
    return parseFloat(formula.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {

  let formula = temp * (9/5) + 32;

  if(Math.ceil(temp) === temp) {
    formula = Math.round(formula * 10) / 10;
    return formula;
  }
  else {
    formula = Math.round(formula * 10) / 10;
    return parseFloat(formula.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};