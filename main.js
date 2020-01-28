'use strict';

let message = prompt('Введите message:');

const getInput = function(str){
  while(!isNaN(str)) {
    alert('Что-то пошло не так...');
    str = prompt('Введите message:');
  }
  str = str.trim();
  if(str.length > 30) {
    str = str.substr(0, 30) + '...';
  }
  return str;
};
console.log(getInput(message));
