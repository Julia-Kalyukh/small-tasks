document.addEventListener("DOMContentLoaded", function () {
  // получаем URL-адрес
  let url = new URLSearchParams(window.location.search),
    // узнаем значение параметра фильтра
    searchParams = url.get("search");

  // если значение = true, то
  if (searchParams) {
    // в input передаем значение параметра
    document.querySelector('.js-input-search').value = searchParams;
    searchStart(searchParams); // file: search/searchStart.js
    searchClick();             // file: search/searchClick.js
  } else {
    loadingFirst();            // file: loadingFirst.js
  }
});