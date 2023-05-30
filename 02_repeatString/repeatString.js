const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let stringValue = '';
    for (i = 0; i < num; i++) {
        stringValue += string;
    }
    return stringValue
};

// Do not edit below this line
module.exports = repeatString;
