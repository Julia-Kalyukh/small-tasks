// Задачи:
    // а) ф-ция, которая будет устанавливать таймер;
    // б) ф-ционал, который будет определять разницу между временем;
    // в) ф-ция, которая будет обновлять таймер

    // Возможны 2 варианта:
        // 1. Честный таймер, который отсчитываает реальное время
        // 2. Маркетинговый таймер, который запоминает пользователя


window.addEventListener('DOMContentLoaded', function() {

// Tabs

    let tabs = document.querySelectorAll('.tabheader__item'), 
          tabsContent = document.querySelectorAll('.tabcontent'), 
          tabsParent = document.querySelector('.tabheader__items'); 

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();
    
    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {     
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


//Timer

    // 1 - Конечная дата
    const deadline = '2021-09-15';

    // 2 - Определение разницы между дедлайном и текущим временем
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // переводим строку переменной 'deadline' в число и отнимаем текущее время
              // Необходимо посчитать время, которое будет отражаться в таймере:
              // * Кол-во оставшихся мс надо разделить на кол-во мс в 1 дне + округлить
              days = Math.floor( t / (1000 * 60 * 60 * 24) ),
              // * Для выведения часов надо узнать остаток, чтобы не выводить более 24ч
              hours = Math.floor( t / (1000 * 60 * 60)  % 24),
              // * Узнаем остаток, чтобы не выводить более 60 мин и сек
              minutes = Math.floor( (t / 1000 / 60) % 60),
              seconds = Math.floor( (t / 1000) % 60);
        
        // 3 - Возврат объекта в глобальную видимость
        return {
            'total': t, // общее кол-во мс
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // 13 - Проверка числа и подрисовка нуля
    function getZero(num) {
        if (num >= 0 && num < 10) { 
            return `0${num}`;
        } else {
            return num;
        }
    }

    // 4 - ф-ция, устанавл. таймер на страницу
    function setClock(selector, endtime) {

        // 5 - Переменные, в которые будут помещаться эл-ты со страницы:
        const timer = document.querySelector(selector), // передаем класс
              days = timer.querySelector('#days'), // поиск по id
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),

              // 9 - Запуск ф-ции каждую секунду
              timeInterval = setInterval(updateClock, 1000); // запуск ф-ции через опр. промежуток времени

        // 12 - Запуск ф-ции вручную, чтобы не было мигания верстки при обновлении страницы
        updateClock(); // далее будет работать 'setInterval'

        
        // 6 - Ф-ция, обновл. таймер каждую секунду
        function updateClock() {

            // 7 - Расчет времени, который остался в данную секунду
            const t = getTimeRemaining(endtime);

            // 8 - Размещение данных на странице
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // 10 - Остановка таймера
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    // 11 - Запуск 
    setClock('.timer', deadline);
});