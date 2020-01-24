let money = 15000,
income = 'фриланс',
addExpenses = 'Интернет, Проезд, Еда',
deposit = true,
mission = 30000,
period = 5;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit) + '\n');

console.log(addExpenses.length + '\n');

console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' рублей' + '\n');

console.log(addExpenses.toLowerCase().split(', ') + '\n');

let budgetDay = money / 30;
console.log(budgetDay);