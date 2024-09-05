const fibonacci = function(a) 
{
    let fibonacciResult = [1];
    if (a < 0)
    {
        return "OOPS";
    }
    else if (a == 0)
    {
        return Number(a);
    }
    else
    {
        for (let i = 0; i < a; i++)
            {
                if (i == 0)
                {
                    fibonacciResult.push(fibonacciResult[i]);
                }
                else
                {
                    fibonacciResult.push(fibonacciResult[i] + fibonacciResult[i - 1]);
                }
                console.log("Loop Count: " + i + " sequence: " +  fibonacciResult)
            }
        
            return fibonacciResult[a - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
