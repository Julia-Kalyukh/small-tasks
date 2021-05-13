var arr = [];
var rounds = 1000000;
var n = 0; var i = 0;
var max_length = 0;
var length = 0;
var zeros = 0;

//Кодировка красных и черных чисел
for (i = 0; i <= rounds; i++) {
    n = Math.round(Math.random() * 36);
    if (n != 0) {
        n = (n % 2) * 2 - 1;
    }
    if (n == 0) {
        zeros++
    }
    arr.push(n);
}

alert(arr);

//Вычисление длины последовательности красных чисел

for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        length = 0;
        while (i < arr.length && arr[i] == 1) {
            i++;
            length++;
        }
        if (length > max_length) {
            max_length = length;
        }
    }
}

alert('Максимально длинная красная последовательность: ' + max_length);
alert('Частота выпадения zero: ' + zeros / arr.length * 100 + '%');