'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
               'Августа', 'Сентября', 'Ноября', 'Декабря'];

function formatDateOne(date) {
  let str = 'Сегодня';

  week.forEach(function(item, index){
    if (index === (date.getDay() - 1)) {
      str = str + ' ' + item;
    }
  });

  str = str + ', ' + date.getDay();

  month.forEach(function(item, index){
    if (index === (date.getMonth() - 1)) {
      str = str + ' ' + item;
    }
  });

  str = str + ' ' + date.getFullYear() + ' года, ';
  if(date.getHours() === 1 || date.getHours() === 21) {
    str = str + date.getHours() + ' час';
  } else if(date.getHours() >= 2 && date.getHours() <= 4) {
    str = str + date.getHours() + ' часа';
  } else if(date.getHours() >= 5 && date.getHours() <= 20) {
    str = str + date.getHours() + ' часов';
  } else if(date.getHours() === 0) {
    str = str + 'полночь';
  }
  return `${str} ${date.getMinutes()} минут ${date.getSeconds()} секунд`;
}

function formatDateTwo(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;
  let h = date.getHours();
  if (h < 10) h = '0' + h;
  let m = date.getMinutes();
  if (m < 10) m = '0' + m;
  let s = date.getSeconds();
  if (s < 10) s = '0' + s;
  return `${dd}.${mm}.${yy} - ${h}:${m}:${s}`;
}

let pStr = document.createElement('p'),
    pNum = document.createElement('p');

pStr.classList.add('list');
pNum.classList.add('list');
document.body.appendChild(pStr);
document.body.appendChild(pNum);
setInterval(function(){
  let day = new Date();
  pStr.textContent = formatDateOne(day);
  pNum.textContent = formatDateTwo(day);
}, 1000);
