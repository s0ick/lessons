'use strict';

let lang = prompt('Укажите язык', 'ru');
let arr = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday', 'Saturday', 'Sunday']
];

if (lang === 'ru') {
  console.log('Понедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота \nВоскресенье');
} else {
  console.log('Monday \nTuesday \nWednesday \nThursday \nFriday \nSaturday \nSunday');
}

switch(lang) {
  case 'ru': console.log('Понедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота \nВоскресенье');
             break;
  case 'en': console.log('Monday \nTuesday \nWednesday \nThursday \nFriday \nSaturday \nSunday');
             break;          
}

console.log(lang === 'ru' ? arr[0] : arr[1]);

let namePerson = prompt('Ваше имя');
console.log(namePerson === 'Артём' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель' : 'Студент');