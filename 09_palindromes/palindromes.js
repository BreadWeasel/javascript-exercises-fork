const palindromes = function (myString)
{
    const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let lowerStr = myString.toLowerCase()
    let stringArr = Array.from(lowerStr);
    stringArr = stringArr.filter((char)=> allowedChars.includes(char));
    
    let revStringArr = stringArr.toReversed();

    let stringA = stringArr.join("");
    let stringB = revStringArr.join("");

    if (stringA === stringB)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
