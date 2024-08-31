const convertToCelsius = function(temperature) 
{
  //(x − 32) × ⁠5/9⁠ °C 
  let temperatureCelcius = (temperature - 32) * (5/9);
  const roundedResult = Math.round(temperatureCelcius * 10) / 10

  return roundedResult;
};

const convertToFahrenheit = function(temperature) 
{
   //(x × ⁠9/5⁠ + 32) °F 
   let temperatureFahrenheit = temperature * (9/5) + 32;
   const roundedResult = Math.round(temperatureFahrenheit * 10) / 10
   
   return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
