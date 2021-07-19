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
// Использование rest-оператора и параметров по умолчанию

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 74; 
            this.changeToRUB();
            
        }

        changeToRUB() {
            this.price *= this.transfer;
        }

        render(){
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container',
        'menu__item'
    ).render();


// Forms
    
    // 1 - Получение форм со страницы
    const forms = document.querySelectorAll('form');

    // 11 - Сообщения при ошибке отправки данных
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    // 15 - Привязываем форму к ф-ции
    forms.forEach(item => {
        postData(item);
    });

    // 2 - Ф-ция, отвечающая за постинг данных
    function postData(form) {
        // 3 - Вешаем обработчик события на форму
        form.addEventListener('submit', (e) => { // срабатывает при отправке формы
            // 4 - Отмена стандартного поведения браузера (перезагрузки стр.)
            e.preventDefault(); // в AJAX-запросах должна идти первой

            // 12 - При отправке запроса создается новый блок
            const statusMessage = document.createElement('div');
            // Добавление класса
            statusMessage.classList.add('status');
            // Добавление сообщения при загрузке
            statusMessage.textContent = message.loading;
            // Отправка сообщения на страницу
            form.append(statusMessage);

            // Работа с объектом XMLHttpRequest
            // 5 - Создание объекта
            const request = new XMLHttpRequest();
            // 6 - Вызывается метод open для настройки запроса
            request.open('POST', 'server.php'); // метод, адрес

            // 7 - Настройка заголовков
            //request.setRequestHeader('Content-type', 'multipart/form-data');
                // Content-type - тип контента
                // multipart/form-data - заголовок согласно док-ции FormDate
                    // Но когда идет связка XMLHttpRequest и FormData -
                    // этот заголовок устанавливать не нужно, он уст. автоматически
            
            // 7 - Заголовки при JSON
            request.setRequestHeader('Content-type', 'application/json');

            // 8 - Создание form-data - объект, формирующий данные пользователя
            const formData = new FormData(form); // конструктор
                // ! При верстке формы, необходимо, чтобы в инпутах всегда был атрибут 'name',
                // иначе FormData не сможет сформировать объект со значениями

            // 18 - Перевод FormData в JSON
            const object = {}; // создание пустого объекта
            // Перебор FormData и перемещение данных в пустой объект
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            // Конвертация в JSON
            const json = JSON.stringify(object); // stringify - переводит объект в JSON

            // 9 - Отправка данных
            //request.send(formData);
            request.send(json);

            // 10 - Обработчик события. Отслеживаем конечную загрузку запроса
            request.addEventListener('load', () => {
                if (request.status === 200) { // запрос прошел успешно
                    // Для проверки 
                     console.log(request.response);
                    // 13 - Сообщение при загрузке
                    statusMessage.textContent = message.success;
                    // 16 - Очистка формы
                    form.reset();
                    // 17 - Убрать сообщение через время
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    // 14 - Сообщение при ошибке
                    statusMessage.textContent = message.failure;
                }
            });
        }); 
    }
    
});