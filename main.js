'use strict';

let money,
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
      'Интернет, Проезд, Еда'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 30000,
    period = 5;

let expenses = [];

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}; 

const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while(!isNumber(money));
};
start();

const showTypeOf = function(data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

let temp;
const getExpensesMonth = function() {
  let sum = 0 ;
  for(let i = 0; i < 2; i++){
    expenses[i] = prompt('Введите обязательную статью расходов:');
    do {
      temp = null;
      temp = prompt('Во сколько это обойдется?');
    } while(!isNumber(temp));
    sum += +temp;
  }
  return sum;
};
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);

const getAccumulatedMonth = function() {
  return +money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(target, costs) {
  if(Math.ceil(target / costs) < 0) {
    return 'Цель не будет достигнута';
  } else {
    return 'Цель будет достигнута за: ' + Math.ceil(target / costs) + ' месяца/ев';
  }
};

console.log(getTargetMonth(mission, accumulatedMonth));

const budgetDay = Math.floor(accumulatedMonth / 30);
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