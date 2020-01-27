'use strict';

let lang = prompt('Укажите язык', 'ru');
let obj = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday', 'Saturday', 'Sunday']
};

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

console.log(obj[lang]);

let namePerson = prompt('Ваше имя');
console.log(namePerson === 'Артём' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель' : 'Студент');