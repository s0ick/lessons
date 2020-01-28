'use strict';

let message = prompt('Введите message:');

const getInput = function(str){
  while(str !== String(str.match(/[а-яА-ЯЁё0-9a-zA-z\s]/g)).replace(/,/g, '')) {
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
