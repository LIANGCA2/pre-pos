'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var target =new Array();
  var collectionB = objectB.value
  var collectionC = countSameElements(collectionA)
  for(var i = 0;i<collectionC.length;i++ ){
    var array = collectionC[i];
    var _key = array.key;
    if(collectionB.includes(_key)){

      if(array.count>=3)
        array.count = array.count-parseInt(array.count/3);
    }
    collectionC[i] = array;
  }
  return collectionC;
}

function countSameElements(collection) {
  var target =new Array();
  var map = {};
  for(var i = 0;i<collection.length;i++){
    var key = collection[i];
    if(key.indexOf('-')>=0){
      var realKey = key.split('-')[0];
      var realValue = parseInt(key.split('-')[1]);

      if(containKeys(map,realKey)){
        map[realKey] =  map[realKey]+realValue;
      }else{
        map[realKey]=realValue;
      }


    }else{
      if(containKeys(map,key)){
        map[key] =  map[key]+1;
      }else{
        map[key]=1;
      }
    }
  }

  for(var key in map) {
    var array = {key: key, count: map[key]}
    target.push(array);
  }
  return target;
}
//判断Map中是否含有指定key的元素
function containKeys(map,_key) {
  var bln = false;

  for(var key in map){
    if (key == _key){
      bln = true;break;
    }

  }
  return bln;
}
