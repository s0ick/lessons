'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = new Date();

week.forEach(function(item, index){

  let p = document.createElement('p');
  p.id = index;
  document.body.appendChild(p);
  let elem = document.getElementById(index);
  elem.textContent = item;
  elem.classList.add('list');
  
  if (index === (day.getDay() - 1)) {
    elem.classList.add('bold');
  } else if(item === 'Суббота' || item === 'Воскресенье'){
    elem.classList.add('italic');
  }
});
