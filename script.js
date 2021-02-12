let money, time;

function start () {

    money = +prompt('Ваш бюджет на месяц?');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    //null при отменеб isNaN - проверяет на нецифровое значение
    while (isNaN(money) || money =="" || money == null) {
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
    savings: true

}


function chooseExprenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце.'),
            b = +prompt('Во сколько обойдется?');
        
        if (typeof(a) ==='string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            
        appData.expenses[a] = b; //без скобочек значение записывается только один раз
    } else {
        //повторить вопрос
        alert("Пожалуйста, ответьте на вопросы");
        a = prompt('Введите обязательную статью расходов в этом месяце.');
        b = +prompt('Во сколько обойдется?');
    }
    
    } 
}

chooseExprenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget/30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ('Минимальный уровень достатка');
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
        console.log ('Средний уровень достатка');
    } else if (appData.moneyPerDay >= 1000 ) {
        console.log ('Высокий уровень достатка');
    } else {
        console.log ('Введено неверное значение');
    }
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i <3; i++) {
        let optExp = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = optExp;
    }
}

chooseOptExpenses();

function checkSavings () {
    if (appData.savings) {
        let save = +prompt('Какова сумма накопление?');
        let percent = +prompt ('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}

checkSavings();

console.log(appData);