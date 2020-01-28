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

const showTypeOf = function(data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

const getExpensesMonth = function(cost1, cost2) {
  return cost1 + cost2;
};
console.log('Расходы за месяц: ' + getExpensesMonth(amount1, amount2));

const getAccumulatedMonth = function() {
  return +money - getExpensesMonth(amount1, amount2);
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(target, costs) {
  return Math.ceil(target / costs);
};

console.log('Цель будет достигнута за: ' + getTargetMonth(mission, accumulatedMonth) + ' месяца/ев');

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(`Бюджет на день: ${budgetDay}`);

const getStatusIncome = function() {
  if (budgetDay >= 1200) {
    return ('Высокий уровень дохода');
  } else if (600 < budgetDay && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (0 < budgetDay && budgetDay <= 600) {
    return ('К сожалению, у вас низкий уровень дохода');
  } else if (budgetDay <= 0) {
    return ('Что-то пошло не так');
  }
};
console.log(getStatusIncome());