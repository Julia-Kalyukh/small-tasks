// Задачи:
    // а) ф-ция, которая будет отвечать за открытие модального окна;
    // б) ф-ция, которая будет за закрытие модального окна;
    // в) подвязать на несколько тригеров обработчики событий.


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

    const deadline = '2021-09-15';
    
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), 
              days = Math.floor( t / (1000 * 60 * 60 * 24) ),
              hours = Math.floor( t / (1000 * 60 * 60)  % 24),
              minutes = Math.floor( (t / 1000 / 60) % 60),
              seconds = Math.floor( (t / 1000) % 60);

        return {
            'total': t, 
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) { 
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector), 
              days = timer.querySelector('#days'), 
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); 
              
        updateClock(); 
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


// Modal

    // 1 - Определение переменных
    const modalTrigger = document.querySelectorAll('[data-modal]'), // получение data-атрибута через квадратные скобки
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    // 2 - Привязка обработчика на несколько тригерров
    modalTrigger.forEach(btn => {
        // 3 - Открытие модального окна
        btn.addEventListener('click', () => {
            // Вариант №1
                // Добавить класс 
                // modal.classList.add('show');
                // Удалить класс
                // modal.classList.remove('hide');
            // Вариант №2
            modal.classList.toggle('show');

            // 5 - Блокировка прокрутки страницы
            document.body.style.overflow = 'hidden';
        });
    });

    // 4 - Закрытие модального окна
    function closeModal(){
        modal.classList.toggle('show');
        // 6 - Разрешить прокрутку страницы
        document.body.style.overflow = '';
    }
    modalCloseBtn.addEventListener('click', closeModal);

    // 7 - Закрыть после нажатия на кнопку 'Перезвонить мне'
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 8 - Закрыть после нажатия на кнопку 'escape'
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) { // ф-ция вызывается только при открытом окне
            closeModal();
        }
    });
});