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

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimeId);
    }
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimeId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 ) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


// Использование классов для карточек

    // 1 - Создание класса (создает только верстку)
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            // 6 - Получение родителя (также можно вычислять в методе'render')
            this.parent = document.querySelector(parentSelector); // DOM-элемент
            this.transfer = 74; // курс доллара к рублю
            this.changeToRUB();
            
        }

        // 2 - Конвертация валют (цена в БД будет в долларах)
        changeToRUB() {
            // Когда трансформируем число - в него же и записываем рез-т
            this.price *= this.transfer;
            // Конвертацию возможно поместить или в метод 'render' или в конструктор
        }

        // 3 - Формирование верстки
            // Создать эл-т, в него поместить опред-ную верстку,
            // верстку дополнить теми данными, которые приходят как аргументы и
            // поместить э-т на страницу
        render(){
            // 4 - Создание э-та
            const element = document.createElement('div');
            // 5 - Динамическое формирование э-та
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                    </div>
                </div>
            `;
            // 7 - Помещение э-та на страницу
            this.parent.append(element);
        }
    }

    // 8 - Создание нового объекта
        // Вариант 1:
            // const div = new MenuCard(аргументы);
            // div.render();
    // Вариант 2 - сокращение записи:
        // Объект может существовать без переменной
        // Применяется только тогда, когда объект используется только на месте,
        // без дальнейшего вызова, тк на него нет ссылок
    
    // 1
    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();

    // 2
    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu .container'
    ).render();

    // 3
    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container'
    ).render();

});