// Задачи:
    // а) ф-ция, которая будет скрывать ненужные табы;
    // б) ф-ция, показывающая нужный таб;
    // в) назначить обработчик событий на меню, который 
    // будет манипулировать этими ф-циями.


// 1 - Назначение глобального обработчика событий
window.addEventListener('DOMContentLoaded', function() {

    // 2 - Получение переменных, с которыми будем взаимодействовать
    const tabs = document.querySelectorAll('.tabheader__item'), // вкладки
          tabsContent = document.querySelectorAll('.tabcontent'), // весь контент, который будет находиться в верстке блока
          tabsParent = document.querySelector('.tabheader__items'); // родитель вкладок

    // 3 - Скрыть все табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none'; // * инлайн-стили
           
            // работа с классами:
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); // 'fade' - анимация
        });
        
        // + удалить класс активности эл-та
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // 4 - Показать табы
    function showTabContent(i = 0) { // первый слайд по умолчанию
        // tabsContent[i].style.display = 'block'; // * инлайн-стили
        
        // работа с классами:
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        
        // + добавить класс активности
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

    // 5 - Делегирование событий + назначение обработчика клика
    tabsParent.addEventListener('click', function (event) {
        // 6 - Переопределение 'event.target' в переменную для удобства
        const target = event.target;

        // 7 - Определение клика на вкладке
        if(target && target.classList.contains('tabheader__item')) {
            // При клике на вкладку, определяем номер в списке всех табов
            // По этому номеру вызывается ф-ция 'showTabContent'
            
            // Перебираем все табы и сравним:
            // если эл-т, который находится в псевдомассиве, совпадает с тем,
            // на который кликнул user, то берем его номер и показываем на стр
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});