'use strict';

let message = prompt('Введите message:');
let newMessage = '';

let SearchError = function(strFix) {
  console.log(strFix+ ' -1');
  if (!isNaN(strFix)) {
    return 0;
  } else {
    console.log(strFix + ' -2');
    return newMessage;
  }
};

let getMessage = function(str){
  if(SearchError(str) === 0){
    alert('Возникла ошибка, попробуйту снова.');
    newMessage = prompt('Введите message:');
    SearchError(newMessage);
  } else {
    str = newMessage;
    // console.log(str + ' -3');
    // //str = str.trim();
    return str;
  }
};
console.log(newMessage);
console.log(getMessage(message));