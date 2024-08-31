const removeFromArray = function(inputtedArray, ...valuesToRemove) 
{
    resultArray = [];
    for (let i = 0; i < inputtedArray.length; i++)
    {
        if (!valuesToRemove.includes(inputtedArray[i]))
        {
            resultArray.push(inputtedArray[i]);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
