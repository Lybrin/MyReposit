let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let  a = prompt("Введите обязательную статью расходов в этом месяц", ""),
                 b = prompt("Во сколько обойдется?", "");
        
            if ( (typeof(a))==="string" && (typeof(a) != null) && (typeof(a) != null) && (a != "") && (b != "") && a.length < 50)  {
                console.log("done!");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
            
        }    
    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay); //вывести сообщение с бюджетом на 1 день        
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уроверь достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уроверь достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уроверь достатка");
        } else {
            console.log("Произошла ошибка!");
        }    
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сума накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    
    },
    chooseOptExpenses: function() {
        let optionalExpenses = {
            1: prompt("Статья необязательных расходов?", ""),
            2: prompt("Статья необязательных расходов?", ""),
            3: prompt("Статья необязательных расходов?", "")
        };    
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        console.log(typeof(items));
      
        while(items == '' || (typeof(items) != "string") || items == false || items.length > 50) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'), '');
        appData.income.sort();
    }
};

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(appData[key] + "\n");
}











