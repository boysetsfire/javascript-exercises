const reverseString = function(stringValue) {
    let splitValue = stringValue.split('');
    let reverseValue = splitValue.reverse();
    let joinValue = reverseValue.join('');
    return joinValue;
};

// Do not edit below this line
module.exports = reverseString;
