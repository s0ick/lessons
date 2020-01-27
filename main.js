'use strict';

let money = prompt('Ваш месячный доход?', '15000'),
income = 'фриланс',
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
 'Интернет, Проезд, Еда'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 30000,
period = 5;

let expenses1 = prompt('Введите обязательную статью расходов?'),
amount1 = prompt('Во сколько это обойдется?'),
expenses2 = prompt('Введите обязательную статью расходов?'),
amount2 = prompt('Во сколько это обойдется?');


console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay);