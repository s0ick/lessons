'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

week.forEach(function(item){
  document.write(`<p class="list">${item}</p>`);
});