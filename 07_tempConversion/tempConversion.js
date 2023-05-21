const convertToCelsius = function(deg) {
  let c = Math.round((deg - 32) * (5/9) * 10) / 10;
  return c;
};

const convertToFahrenheit = function(deg) {
  let f = Math.round(((deg * 9) / 5 + 32) * 10) / 10; 
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(100));
