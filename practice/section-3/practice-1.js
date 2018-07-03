'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var target =new Array();
  var collectionB = objectB.value
  for(var i = 0;i<collectionA.length;i++ ){
    var array = collectionA[i];
    var _key = array.key;
    if(containKey(collectionB,_key)){
      array.count = array.count-1;
    }
    collectionA[i] = array;
  }
  return collectionA;
}
//判断Map中是否含有指定key的元素
function containKey(collectionB,_key) {
  var bln = false;

  for(var i = 0;i<collectionB.length;i++){
    if (collectionB[i] == _key){
      bln = true;break;
    }

  }
  return bln;
}
