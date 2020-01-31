'use strict';

let money;

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}; 

const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while(!isNumber(money));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  asking: function() {
    let name = '',
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
        'Еда, проезд, комуналка');
        appData.addExpenses = addExpenses.toLowerCase().split(', '); 
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for(let i = 0; i < 2; i++){
      name = prompt('Введите обязательную статью расходов:');
      do {
        appData.expenses[name] = null;
        appData.expenses[name] = prompt('Во сколько это обойдется?');
      } while(!isNumber(appData.expenses[name]));
    }    
  },

  getExpensesMonth: function() {
    for(let key in appData.expenses){
      appData.expensesMonth += +appData.expenses[key];
    }
    console.log(`Расходы за месяц: ${appData.expensesMonth}`);
    return appData.expensesMonth;
  },

  getBudget: function() {
    appData.budgetMonth = +money - appData.getExpensesMonth();
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function() {
    appData.getBudget();
    if(Math.ceil(appData.mission / appData.budgetMonth) < 0) {
      return 'Цель не будет достигнута';
    } else {
      return `Цель будет достигнута за: ${Math.ceil(appData.mission / appData.budgetMonth)} месяца/ев`;
    }
  },

  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      return ('Высокий уровень дохода');
    } else if (600 < appData.budgetDay && appData.budgetDay < 1200) {
      return ('У вас средний уровень дохода');
    } else if (0 < appData.budgetDay && appData.budgetDay <= 600) {
      return ('К сожалению, у вас низкий уровень дохода');
    } else if (appData.budgetDay <= 0) {
      return ('Что-то пошло не так');
    }
  }
};

appData.asking();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:');
for(let key in appData) {
  console.log(`Свойство: ${key} - Значение: ${appData[key]}`);
}
