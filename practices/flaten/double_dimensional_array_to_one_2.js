'use strict';

function double_to_one(collection) {

    var newArray = [];

    for (var i = 0; i < collection.length; i++) {
        if (typeof collection[i] === 'number' && !getExistItem(collection[i], newArray)) {
            newArray.push(collection[i]);
        } else {
            for (var k = 0; k < collection[i].length; k++) {
                var item = getExistItem(collection[i][k], newArray);
                if(!item) {
                    newArray.push(collection[i][k]);
                }
            }
        }
    }

    return newArray;
}

function getExistItem(item, newArray) {

    for(var i = 0; i < newArray.length; i++) {
        if(newArray[i] === item)
            return item;
    }
}

module.exports = double_to_one;