'use strict';

function collectSameElements(collectionA, collectionB) {
  var target = new Array()
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      var childrenArray = collectionB[j];
      for (var k = 0; k < childrenArray.length; k++) {
        if (collectionA[i] == childrenArray[k]) {
          target.push(collectionA[i]);
          break;
        }
      }


    }
  }
  return target;
}
