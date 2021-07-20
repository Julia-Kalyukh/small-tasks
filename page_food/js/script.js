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
          modal = document.querySelector('.modal');
          // 7 - Обработчик события не срабатывает на динамически созданных эл-тах
          // Поэтому используем делегирование событий

    function openModal() {
        //modal.classList.toggle('show'); - toggle ломает окна
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimeId);
    }
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        //modal.classList.toggle('show');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        // 8 - получаем атрибут data-сlose - если он присутствует, то мы будем закрывать модальное окно
        if (e.target === modal || e.target.getAttribute('data-close') === "") { 
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimeId = setTimeout(openModal, 500000);

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

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg', // картинка загрузки
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            // 11 - меняем на кртинку вместо сообщения
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            // CSS-стили
            statusMessage.style.cssText  = `
                display: block;
                margin: 0 auto;
            `;
            // Добавляем спиннер после формы
            form.insertAdjacentElement('afterend', statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                     console.log(request.response);
                    showThanksModal(message.success); // вызов ф-ции
                    statusMessage.remove(); // будет использоваться только для спиннера
                    form.reset();
                    
                } else {
                    showThanksModal(message.failure);
                }
            });
        }); 
    }

    function showThanksModal(message) {
        // 1 - Получение эл-та
        const prevModalDialog = document.querySelector('.modal__dialog');

        // 2 - Скрытие эл-та до появления модального окна
        prevModalDialog.classList.add('hide');
        // 3 - Открытие
        openModal();

        // 4 - Создание контента
        const thanksModal = document.createElement('div');
        // 5 - Назначение классов
        thanksModal.classList.add('.modal__dialog');
        // 6 - Формирование верстки модального окна
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        // 9 - Размещение верстки на странице
        document.querySelector('.modal').append(thanksModal);

        // 10 - Необходимо, чтобы через определенное время все возвращалось на свои места
        setTimeout(() => {
            // Удаление блока
            thanksModal.remove();
            // Показ формы
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            // Закрыть модальное окно
            closeModal();
        }, 4000);
    }
});