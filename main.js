'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = new Date();

week.forEach(function(item, index){
  if (index === (day.getDay() - 1)) {
    document.write(`<p class="list bold"><b>${item}</b></p>`);
  } else if(item === 'Суббота' || item === 'Воскресенье'){
    document.write(`<p class="list"><i>${item}</i></p>`);
  }  else {
    document.write(`<p class="list">${item}</p>`);
  }
});
