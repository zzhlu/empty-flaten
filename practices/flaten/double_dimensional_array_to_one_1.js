'use strict';

function double_to_one(collection) {
  var newArray = [];

  for (var i = 0; i < collection.length; i++) {
    if (typeof collection[i] === 'number') {
      newArray.push(collection[i]);
    } else {
      for (var k = 0; k < collection[i].length; k++) {
        newArray.push(collection[i][k]);
      }
    }
  }

  return newArray;
}

module.exports = double_to_one;
