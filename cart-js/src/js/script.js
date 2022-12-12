window.addEventListener('DOMContentLoaded', function() {
    // Получение данных
    let products = document.querySelectorAll('.product'), // продукты
        buttons = document.querySelectorAll('button'), // кнопки "купить"
        openBtn = document.querySelector('.open'); // открытие корзины

    // функция создания корзины
    function createCart() {
        // Создаем теги
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        // Добавляем классы тегам
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        // Добавляем текст заголовку
        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';

        // Помещаем элементы на страницу
        document.body.appendChild(cart);

        // Заполнение корзины
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }
    createCart();

    //переменные создаются после того, как корзина была создана
    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    // функция открытия корзины
    function openCart() {
        cart.style.display = 'block';
    }
    // функция закрытия корзины
    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart); // при нажатии на кнопку 'открыть' - открывается корзина
    close.addEventListener('click', closeCart); // и закрываается


    // Добавление товара в корзину

    // ! querySelectorAll имееет дополнительный метод, которого нет у других псевдоэлементов (у обычных массивов есть)
    // 1 - современный вариант
    // ! функция в forEach принимает в себя максимум 3 аргумента
        // 1 - каждый элемент в перебираемом массиве
        // 2 - индекс эл-та 
        // 3 - перебираемый массив 
    buttons.forEach(function(button, i) {
        button.addEventListener('click', function() {
            // при клике на кнопку купить:
            // копируем продукт
            let item = products[i].cloneNode(true), // true - глубокое копирование - с внутренностями
                btn = item.querySelector('button'); // в продукте находим кнопку 'купить'

            btn.remove(); // удаляем кнопку из клона
            field.appendChild(item); // помещаем клон в корзину 
            products[i].remove(); // удаляем товар со страницы
        });
    })

    // Вариант со стрелочной функцией
    // ! имеет особенности с контекстом вызова
    // buttons.forEach((button, i) => {
    //     ...
    // })

    // // 2 - устаревший вариант
    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', function() {
    //          ... 
    //     });
    // }
});