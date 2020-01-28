'use strict';

const message = prompt('Введите message:');

const getInput = function(str){
  console.log(typeof str === 'string');
  while(!isNaN(str)) {
    alert('Что-то пошло не так...');
    str = prompt('Введите message:');
  }
  str = str.trim();
  if(str.length > 30) {
    str = str.slice(0, 30) + '...';
  }
  return str;
};
console.log(getInput(message));
