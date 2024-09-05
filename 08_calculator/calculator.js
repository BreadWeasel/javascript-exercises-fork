const add = function(a, b) 
{
	return a + b;
};

const subtract = function(a, b) 
{
	return a - b;
};

const sum = function(numberArr) 
{
  let sumResult = numberArr.reduce((total, curr)=>
  {return total + curr}, 0);
  
  return sumResult;
};

const multiply = function(a, b = 1)
{
  let multResult;
  multResult = a.reduce((total, curr)=>
    {return total * curr});
  return multResult;
};

const power = function(a, b)
{
	return a ** b;
};

const factorial = function(a)
{
  let result = 0;
	if (a == 0)
  {
    result = 1;
    return result;
  }
  else if (a > 0)
  {
    result = a * factorial(a - 1);
    console.log(result);
    return result;
  }
  return result;
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
