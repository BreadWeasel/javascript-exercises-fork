const sumAll = function(a, b)
{
    let sumResult = 0;

    if (typeof(a) != "number" || typeof(b) != "number")
    {
        return "ERROR";
    }
    else if (a < 0 || b < 0)
    {
        return "ERROR";
    }
    else if (Number.isInteger(a) == false || Number.isInteger(b) == false)
    {
        return "ERROR";
    }
    else
    {
        let value = Math.min(a, b);
        for (value; value <= Math.max(a, b); value++)
        {
            sumResult += value;
        }
    }
    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
