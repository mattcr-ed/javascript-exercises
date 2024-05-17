const removeFromArray = function(arr, val1, val2, val3, val4) {
    var argArray = [];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] != null)
            argArray.push(arguments[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < argArray.length; j++) {
            if (arr[i] === argArray[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
