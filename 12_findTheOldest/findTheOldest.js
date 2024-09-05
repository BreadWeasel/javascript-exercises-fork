function compareAge(personA, personB)
{
    const date = new Date();
    const currentYear = date.getFullYear(); 

    let ageA;
    let ageB;

    if (personA.yearOfDeath == undefined)
    {
        ageA = currentYear - personA.yearOfBirth;
    }
    else
    {
        ageA = personA.yearOfDeath - personA.yearOfBirth;
    }

    if (personB.yearOfDeath == undefined)
    {
        ageB = currentYear - personB.yearOfBirth;
    }
    else
    {
        ageB = personB.yearOfDeath - personB.yearOfBirth;
    }


    if (ageA > ageB)
    {
        return 1;
    }
    else if (ageA == ageB)
    {
        return 0;
    }
    else if (ageA < ageB)
    {
        return -1;
    }
}


const findTheOldest = function(objArr)
{
    let resultArr;

    resultArr = objArr.sort((a, b)=>
    compareAge(a, b));

    return resultArr.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
