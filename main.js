'use strict';

let money = prompt('Ваш месячный доход?'),
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