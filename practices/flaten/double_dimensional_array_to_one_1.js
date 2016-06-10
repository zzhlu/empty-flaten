'use strict';

function double_to_one(collection) {
    var newArray = [];

    for (var i = 0; i < collection.length; i++) {
        if (typeof collection[i] === 'number') {
            newArray.push(collection[i]);
        } else {
            divideArray(newArray, collection[i]);
        }
    }

    return newArray;
}

function divideArray(newArray, collection) {
    collection.forEach(function (element) {
        newArray.push(element);
    });

    return newArray;
}

module.exports = double_to_one;