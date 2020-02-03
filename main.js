'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = new Date();

week.forEach(function(item, index){

  let p = document.createElement('p');
  p.classList.add('list');
  p.textContent = item;
  
  if (index === (day.getDay() - 1)) {
    p.classList.add('bold');
    if(item === 'Суббота' || item === 'Воскресенье'){
      p.classList.add('italic');
    }
  } else if(item === 'Суббота' || item === 'Воскресенье'){
    p.classList.add('italic');
  }
  document.body.appendChild(p);
});
