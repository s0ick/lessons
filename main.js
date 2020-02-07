'use strict';

let decCache = [],
      decCases = [2, 0, 1, 1, 1, 2]; 

function declOfNum(number, titles)  
  {  
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
  }

function formatDateOne(date) {
  let str = 'Сегодня ';

  let options = { weekday: 'long'};
  str = str + date.toLocaleString('ru', options);
  str = str.slice(0,7) + ' ' + str.split(' ')[1].toUpperCase().slice(0,1) + str.slice(9) + ', ';
  options = {day: 'numeric', month: 'long', year: 'numeric'};
  str = str + date.toLocaleString('ru', options);
  str = str.substring(0, (str.length -1)) + 'ода, ';
  options = {hour: 'numeric'};
  str = str + date.toLocaleString('ru', options) + ' ' + declOfNum(date.toLocaleString('ru', options),['час', 'часа', 'часов']);
  options = {minute: 'numeric'};
  str = str + ' ' + date.toLocaleString('ru', options) + ' минут ';
  options = {second:'numeric'};
  str = str + ' ' + date.toLocaleString('ru', options) + ' секунды';
  return str;
}

function formatDateTwo(dd, mm, yy, h, m, s) {
  function TF(temp) {
    if(temp < 10) {
      temp = '0' + temp;
    }
    return temp;
  }
  return `${TF(dd)}.${TF(mm)}.${TF(yy)} - ${TF(h)}:${TF(m)}:${TF(s)}`;
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
  pNum.textContent = formatDateTwo(day.getDate(), day.getMonth() + 1, day.getFullYear() % 100,
                                   day.getHours(), day.getMinutes(), day.getSeconds());
}, 1000);
