function launchSearchValue() {
  let search = document.querySelector('.search__input'),
    value = search.value,
    newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?search=${value}`;

  window.history.pushState({ path: newurl }, "", newurl);

  if (value) {
    document.querySelector('.main').innerHTML = '';
    searchStart(value);
  } else {
    document.querySelector('.main').innerHTML = "Введите значение";
  }
}

function searchClick() {
  let searchInput = document.querySelector('.search__input'),
    searchBtn = document.querySelector('.search__btn');

  searchBtn.addEventListener('click', function () {
    launchSearchValue();
  });
  searchInput.addEventListener('keyup', event => {
    if (event.code === 'Enter') launchSearchValue();
  });
}
