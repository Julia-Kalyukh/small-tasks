
# ◈ appMovieDB

[Demo ▻](https://appmovie.yuliyakalyukh.ru) 

## Приложение собирает следующие данные:
<ul>
   <li>Ответ на вопрос <i>«Сколько фильмов вы уже посмотрели?»</i></li>
   <li>По 2 ответа на вопросы:</li>
        <ul>
            <li><i>«Один из последних просмотренных фильмов?»</i></li>
            <li><i>«Как оцените его?»</i></li>
        </ul>
   <li>3 ответа на вопрос <i>"Ваш любимый жанр под номером (1,2,3)?»</i></li>
</ul>


Пользователю нельзя  нажать кнопку "отмена" или оставить пустую строку, так как вопрос повторяется.

В приложении существует метод, который при вызове проверяет свойство `privat`. Если оно `false` - он переключает его в `true`, если `true` - переключает в `false`.

На основании ответов, пользователю выводятся модальное окно с рейтингом и объект данных в консоль (если свойство `privat is true`).
<p align="center">⬥ ⬥ ⬥</p>

# ◈ page_food

[Demo ▻](https://food.yuliyakalyukh.ru)

### Создан таймер на странице
- Созданы функции: устанавливающая таймер и обновляющая таймер
- Реализован функционал, который определяет разницу между временем 
### Создано модальное окно
- Созданы функции, отвечающие за открытие/закрытие модального окна
- Обработчики событий привязаны на несколько тригеров
- Вызов модального окна через определенное время (_setTimeout_ и _setInterval_)
- Если пользователь долистал до конца страницы - выводится модальное окно
- Верстка модального окна
- Добавлен спиннер при загрузке формы
- Примененено делегирование события
### Применение fetch API для отправки запросов
- GET-запрос
- POST-запрос
- Использование async/await
### Создан слайдер-карусель
- Применен обработчик события для движения слайдов
- Созданы точки под слайдером
- Применены регулярные выражения 
### Создан калькулятор на странице
- Применен обработчик события на каждый элемент
- Использование валидации и localStorage
- Подсветка неверно введенных инпутов
### Готовая сборка проекта
- Babel
- Core.js
- Webpack
- ES6 Modules

### В проекте также отработаны следующие методы, впоследствии удаленные при рефакторинге:
- Отправка данных из формы на сервер при помощи XMLHTTPRequest
- Сборка проекта при помощи Webpack + Common.js
<p align="center">⬥ ⬥ ⬥</p>

# ◈ page_movieDB
 [Demo ▻](https://movie.yuliyakalyukh.ru)

## Работа с элементами на странице:
- Удалить все рекламные блоки со страницы
- Изменить жанр фильма, поменять _"комедия"_ на _"драма"_
- Изменить задний фон постера с фильмом
- Cформировать писок фильмов на странице и отсортировать их по алфавиту 
- Добавить нумерацию выведенных фильмов 

## Использование события на странице проекта:
- Реализовать функционал, что после заполнения формы и нажатия кнопки _"Подтвердить"_ - 
 новый фильм добавляется в список. Страница не должна перезагружаться.
- Если название фильма больше, чем 21 символ - обрезать его и добавить многоточие
- При клике на мусорную корзину - элемент удаляется из списка
- Если в форме стоит галочка _"Сделать любимым"_ - в консоль вывести сообщение: _"Добавляем любимый фильм"_
- Фильмы сортируются по алфавиту

### Исходник
![Image alt](https://github.com/Julia-Kalyukh/JS_projects/blob/main/page_movieDB/img/source_pageMovie.png)
