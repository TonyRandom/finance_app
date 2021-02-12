let money, time;

function start() {

    money = +prompt('Ваш бюджет на месяц?');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    //null при отменеб isNaN - проверяет на нецифровое значение
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExprenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце.'),
                b = +prompt('Во сколько обойдется?');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {

                appData.expenses[a] = b; //без скобочек значение записывается только один раз
            } else {
                //повторить вопрос
                alert("Пожалуйста, ответьте на вопросы");
                a = prompt('Введите обязательную статью расходов в этом месяце.');
                b = +prompt('Во сколько обойдется?');
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 1000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Введено неверное значение');
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let optExp = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = optExp;
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt('Какова сумма накопление?');
            let percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },
    /* chooseIncome: function () {

        let i = 0;
        while (i < 1) {
            let items = prompt("Способы доп. заработка: (перечислите через запятую)");
            if (isNaN(items) === "string" || items != null || items != "") {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
                /* i++; */
            /*} else {
                i--;
            }
        }
        


    } */

    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while(true) {
            if (typeof(items) === 'string' && typeof(items) != null && items != '' && isNaN(items)) {
                appData.income = items.split(', ');
                
                let addItems = prompt('Может что-то еще?', '');
                if (typeof(addItems) === 'string' && typeof(addItems) != null && addItems != '') {
                    appData.income.push(addItems);
                }
                
                appData.income.sort();
                break;
            } else {
                items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            }
        }

        appData.income.forEach(function (i, item, arr) {
            alert((i+1) + ": " + item + "(Способы доп. заработка: " + arr + ")");
        })
    }

}



console.log(appData);

for (item in appData) {
    console.log(`Программа включает в себя следующие данные ${item}`);
}