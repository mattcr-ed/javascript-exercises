const findTheOldest = function(objarray) {
    let oldestAge = 0, oldestPos = 0;
    for (let i = 0; i < objarray.length; i++) {
        let age = 0;
        if (objarray[i]['yearOfDeath'] == undefined) {
            age = 2024 - objarray[i]['yearOfBirth'];
        } else {
            age = objarray[i]['yearOfDeath'] - objarray[i]['yearOfBirth'];
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestPos = i;
        }
    }

    return objarray[oldestPos];
};

// Do not edit below this line
module.exports = findTheOldest;
