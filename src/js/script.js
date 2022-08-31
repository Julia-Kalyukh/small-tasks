function myFirstApp(name, age) {
    document.write(`Привет, меня зовут ${name} и это моя первая программа! <br>`);

    function showSkills() {
        let skills = ['html', 'scss', 'js'];
        return(`Я владею: ${skills.join(', ')}! <br>`);
        // document.write(`Я владею: ${skills.join(', ')}! <br>`)
    }
    document.write(showSkills());

    function checkAge() {
        if (age >= 18) {
            document.write(`Тебе ${age}? Отличный возраст! <br>`);
        } else {
            document.write(`Тебе ${age}? Ты супер! <br>`);
        }
    }
    checkAge();

    function calcPow(num) {
        document.write(`Твой возраст в квадрате: ${num*num}`);
    }
    calcPow(age);
}

myFirstApp('Юля', '25');