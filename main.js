'use strict';

const money = prompt('Ваш месячный доход?'),
income = 'фриланс',
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
 'Интернет, Проезд, Еда'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 30000,
period = 5;

let expenses1 = prompt('Введите обязательную статью расходов?', 'Лицензионное ПО'),
amount1 = +prompt('Во сколько это обойдется?'),
expenses2 = prompt('Введите обязательную статью расходов?', 'ЖКХ'),
amount2 = +prompt('Во сколько это обойдется?');


console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetMonth = +money - (amount1 + amount2);
console.log(`Бюджет на месяц: ${budgetMonth}`);

console.log('Цель будет достигнута за: ' + Math.ceil(mission / budgetMonth) + ' месяца/ев');

let budgetDay = Math.floor(budgetMonth / 30);
console.log(`Бюджет на день: ${budgetDay}`);

if (budgetDay >= 1200) {
  console.log('Высокий уровень дохода');
} else if (600 < budgetDay && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (0 < budgetDay && budgetDay <= 600) {
  console.log('К сожалению, у вас низкий уровень дохода');
} else if (budgetDay <= 0) {
  console.log('Что-то пошло не так');
}
