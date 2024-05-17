const fibonacci = function(val) {
    let val1 = 0;
    let val2 = 1;

    if (val < 0)
        return 'OOPS';

    if (val == 0)
        return val1;
    if (val == 1)
        return val2;

    let sum = 0;
    for (let i = 1; i < val; i++) {
        sum = val1 + val2;
        val1 = val2;
        val2 = sum;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
