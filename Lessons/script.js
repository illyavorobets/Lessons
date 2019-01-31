'use strict';
var money = prompt('Ваш бюджет на месяц?', '100');
var time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

var appData = {

    bytget: money,
    data: time,
    optionalExpenses: "",
    income: [],
    savings: true,
    };

var expenses = {
    answ1:+prompt('Введите обязательную статью расходов в этом месяце','0'),
    answ2:+prompt('Во сколько обойдется','0')

}

alert(expenses.answ1/30);