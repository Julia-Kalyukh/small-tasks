function launchSearchValue() {
  let search = document.querySelector('.js-input-search'),
    // Значение input
    value = search.value,
    // передаем параметр в адресную строку
    newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?search=${value}`;

  // новый адрес
  window.history.pushState({ path: newurl }, "", newurl);

  if (value) {
    // Очищаем контейнер с постами 
    document.querySelector('.js-container-content').innerHTML = '';
    // Запускаем поиск
    searchStart(value);  //  file: searchStart.js
  } else {
    document.querySelector('.js-container-content').innerHTML = "Введите значение";
  }
}

function searchClick() {
  let searchInput = document.querySelector('.js-input-search'),
    searchBtn = document.querySelector('.js-btn-search');

  searchBtn.addEventListener('click', function () {
    launchSearchValue();
  });
  searchInput.addEventListener('keyup', event => {
    if (event.code === 'Enter') launchSearchValue();
  });
}
