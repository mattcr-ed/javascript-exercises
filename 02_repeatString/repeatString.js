const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    var returnVal = "";
    for (let i = 0; i < num; i++) {
        returnVal += str;
    }

    return returnVal;
};

// Do not edit below this line
module.exports = repeatString;
