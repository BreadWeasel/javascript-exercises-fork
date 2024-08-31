const repeatString = function(stringToRepeat, repeatAmount)
{
    repeatedString = "";
    if (typeof(repeatAmount) == 'number' && repeatAmount > 0)
    {
        let timesRepeated = 0;
        for (timesRepeated; timesRepeated < repeatAmount; timesRepeated++)
        {
            repeatedString += stringToRepeat;
            //console.log(repeatedString);
        }
    }
    else if (repeatAmount < 0)
    {
        return "ERROR";
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
