'use strict';

function double_to_one(collection) {
    var newArray = [];

    for (var i = 0; i < collection.length; i++) {
        var item = getExistItem(collection[i], newArray);
        if (typeof collection[i] === 'number' && !item) {
            newArray.push(collection[i]);
        } else {
            divideArrayNoRepeat(collection[i], newArray);
        }
    }

    return newArray;
}

function getExistItem(item, newArray) {
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] === item)
            return item;
    }
}

function divideArrayNoRepeat(collection, newArray) {
    for (var k = 0; k < collection.length; k++) {
        var item = getExistItem(collection[k], newArray);
        if (!item) {
            newArray.push(collection[k]);
        }
    }

    return newArray;
}

module.exports = double_to_one;