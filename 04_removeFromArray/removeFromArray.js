const removeFromArray = function (arr, ...vals) {
    const arrayWithoutValues = [];
    arr.forEach(element => {
        if (!vals.includes(element)) {
            arrayWithoutValues.push(element);
        }
    });
    return arrayWithoutValues;
};

// Do not edit below this line
module.exports = removeFromArray;
