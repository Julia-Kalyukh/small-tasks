function launchSearchValue() {
  let search = document.querySelector('.js-input-search'),
    value = search.value,
    newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?search=${value}`;

  window.history.pushState({ path: newurl }, "", newurl);

  if (value) {
    document.querySelector('.js-container-content').innerHTML = '';
    searchStart(value);
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
