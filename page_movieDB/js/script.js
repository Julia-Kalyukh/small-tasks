/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const   adv = document.querySelectorAll('.promo__adv img'),//это псевдомассив, у него не существует методов
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list');

//1
// стрелочная функция
adv.forEach(item =>{
    item.remove();
}); 
    //обычная функция
    // adv.forEach(function(item){
    //     item.remove();
    // }); 

//2
genre.textContent = 'драма';
//genre.innerHTML = "Драма"; //тоже работает

//3
poster.style.backgroundImage = 'url("img/bg.jpg")';// путь прописывается относительно HTML-страницы 

//4
//удаляем текущий список со страницы
movieList.innerHTML = "";

//сортируем список
movieDB.movies.sort();

//перебираем данные и формируем список
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
  `;
});




