//Калькулятор вклада

function start () {
    var money = parseFloat(prompt('Сумма вклада: '));
    var interests = parseFloat(prompt('Процентная ставка: '));
    var years = parseFloat(prompt('Срок вклада: '));

    if (isNaN(money && interests && years)) {
        alert('Введите числа');
        start();
    } else {
        for (var n = 1; n <= years; n++) {
            money += money * interests / 100;
            alert('Прошло лет: ' + n + ' сумма на счету: ' + Math.floor(money));
        }
    }
}
start ();