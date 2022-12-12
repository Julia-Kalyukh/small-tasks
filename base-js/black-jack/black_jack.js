//Игра в Black Jack

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCard() {
  var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  return cards[getRandomInt(0, cards.length - 1)];
}

function getSum(hand) {
  var sum = 0;

  //Сначала считаем все карты, кроме тузов
  for (var i = 0; i < hand.length; i++) {
    var card = hand[i];
    if (card != 'A') {
      if (card == 'J' || card == 'Q' || card == 'K') {
        sum += + 10;
      } else {
        sum += +(card);
      }
    }
  }

  //Туз считается как 1, если текущая сумма больше 10, иначе - как 11
  for (var i = 0; i < hand.length; i++) {
    var card = hand[i];
    if (card == 'A') {
      if (sum > 10) {
        sum += + 1;
      } else {
        sum += + 11;
      }
    }
  }
  return sum;
}

function getStatus() {
  return 'Дилер: ' + dealer.join(' ') + '\n' + 'Игрок: ' + player.join(' ');
}

var dealer = [getCard()];
var player = [getCard(), getCard()];

//Проверка на Black Jack после раздачи
if (getSum(player) == 21) {
  alert('Black Jack на раздаче! 🤡 \n');
} else {
  var answer = '';
  do {
    answer = +prompt(getStatus() + '\n \nХотите еще карту? \n1 - да \nиначе - нет');

    //Cдаем карту игроку или прекращаем игру
    if (answer == 1) {
      player.push(getCard());

      //Проверяем, нет ли перебора или выигрыша
      sum = getSum(player);
      if (sum > 21) {
        alert('Перебор ❌ \n' + getStatus());
        break;
      } else if (sum == 21) {
        alert('Black Jack! 🤩 \n' + getStatus());
        break;
        // Игрок закончил брать карты
      }
    } else {
      // Теперь карты берет дилер
      while (getSum(dealer) < 17) {
        dealer.push(getCard());
      };
      //Проверяем результат
      var sumDealer = getSum(dealer);
      var sumPlayer = getSum(player);

      if (sumDealer == 21) {
        alert('У Дилера Black Jack! 🤡 \n' + getStatus());
      } else if (sumDealer > 21) {
        alert('У Дилера перебор! 🥳 \n' + getStatus());
      } else if (sumDealer == sumPlayer) {
        alert('Ничья! 🤭 \n' + getStatus());
      } else if (sumPlayer > sumDealer) {
        alert('Вы победили! 🤓 \n) ' + getStatus());
      } else {
        alert('Вы проиграли! 💸 \n' + getStatus());
      }
    }
  } while (answer == 1);
}
