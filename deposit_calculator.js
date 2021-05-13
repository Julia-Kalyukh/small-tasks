
//Калькулятор вклада

var money = parseInt(prompt('Сумма вклада: '));
var interests = parseInt(prompt('Процентная ставка: '));
var years = parseInt(prompt('Срок вклада: '));

for (var n = 1; n <= years; n++) {
    money += money * interests / 100;
    alert('Прошло лет: ' + n + ' сумма на счету: ' + Math.floor(money));
}