const convertToCelsius = function(float) {
  return Math.round((float - 32) * (5 / 9) * 10) / 10
};

const convertToFahrenheit = function(float) {
  return Math.round(((float * 9) / 5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
