
let buttonStart = document.getElementById('start'), //получим кнопку "Начать расчет"
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value');

let inputs = document.getElementsByClassName('expenses-item');

let btns = document.querySelectorAll('button'),
    btnUtv = btns[0], btnRass = btns[1], countBtn = btns[2];

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


buttonStart.style.fontSize = '14px';
btnUtv.style.fontSize = '14px';

btns.forEach(function(item, i, btns) {
    if (i < 3) {
        item.disabled = true;
        item.style.color = 'lightgrey';
        item.style.fontStyle = 'italic';
        item.style.cursor = 'default';    
    }
});

let money, time;

buttonStart.addEventListener('click', function() {    //Обработчик кнопки "Начать расчет"

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    };

    btns.forEach(function(item, i) {
        if (i < 3) {
            item.disabled = false;
            item.style.color = 'white';
            item.style.fontStyle = 'normal';
            item.style.cursor = 'pointer';    
        }
    });    

    appData.budget = money;
    appData.timeData = time;
    budgetValue[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});



btnUtv.addEventListener('click', function() {  //обработчик кнопки "Утвердить" (поле "Введите обязательные расходы")
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
        let  a = inputs[i].value,
             b = inputs[++i].value;
    
        if ( (typeof(a))==="string" && (typeof(a) != null) && (typeof(a) != null) && (a != "") && (b != "") && a.length < 50)  {
            console.log("done!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        
    }  

    expensesValue[0].textContent = sum;
});

btnRass.addEventListener('click', function() {  //Обработчик кнопки "Утвердить" (Поле "Введите необязат. расходы")
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue[0].textContent += appData.optionalExpenses[i] + ' ';
    }   
});

countBtn.addEventListener('click', function() {  //Обработчик кнопки "Рассчитать" (Поле "Расчет дневного бюджета"
    
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - (+expensesValue[0].textContent))/ 30).toFixed();
        daybudgetValue[0].textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue[0].textContent = "Минимальный уроверь достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue[0].textContent = "Средний уроверь достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue[0].textContent = "Высокий уроверь достатка";
        } else {
            levelValue[0].textContent = "Произошла ошибка!";
        }       
    }else {
        daybudgetValue[0].textContent = "Произошла ошибка!";
    }
    
});

chooseIncome.addEventListener('input', function() { //обработчик поля ввода (Поле "Введите статьи возм.дохода")
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue[0].textContent = appData.income;
});

/* chooseIncome.addEventListener('change', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue[0].textContent = appData.income;
}); */

savings.addEventListener('click', function() { //обработчик Checkbox "Есть ли накопления"
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() { //обработчик поля ввода "Сумма"
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue[0].textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue[0].textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {  //обработчик поля ввода "Процент"
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue[0].textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue[0].textContent = appData.yearIncome.toFixed(1);
    }

});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
