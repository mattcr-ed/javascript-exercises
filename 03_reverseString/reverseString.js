const reverseString = function(str) {
    var chars = str.split("");
    chars.reverse();
    var revString = chars.join("");

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
