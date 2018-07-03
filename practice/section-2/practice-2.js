'use strict';

function countSameElements(collection) {
  var target =new Array();
  var map = {};
  for(var i = 0;i<collection.length;i++){
    var key = collection[i];
    if(key.indexOf('-')>=0){
    var realKey = key.split('-')[0];
    var realValue = parseInt(key.split('-')[1]);

      if(containKey(map,realKey)){
        map[realKey] =  map[realKey]+realValue;
      }else{
        map[realKey]=realValue;
      }


    }else{
    if(containKey(map,key)){
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
function containKey(map,_key) {
  var bln = false;

  for(var key in map){
    if (key == _key){
      bln = true;break;
    }

  }
  return bln;
}
