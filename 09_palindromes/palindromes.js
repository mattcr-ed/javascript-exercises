const palindromes = function (word) {
    word = word.replaceAll(/\s+/g, '');
    word = word.replaceAll('!', '');
    word = word.replaceAll(',', '');
    word = word.replaceAll('.', '');
    word = word.toLowerCase();
    let split = word.split("");
    let reverse = split.reverse();
    reverse = reverse.join("");
    return (word == reverse);
};

// Do not edit below this line
module.exports = palindromes;
