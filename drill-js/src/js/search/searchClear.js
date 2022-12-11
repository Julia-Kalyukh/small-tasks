function searchClear() {
  let btnClear = document.querySelector('.js-btn-clear');

  btnClear.addEventListener('click', function () {
    // Очищаем блок с постами
    document.querySelector('.js-container-content').innerHTML = '';
    // Очищаем input
    document.querySelector('.js-input-search').value = '';
    // Загружаем первые посты
    loadingFirst();
    // Очищаем адресную строку
    let searchParams = window.location.protocol + "//" + window.location.host + window.location.pathname + ``;
    window.history.pushState({ path: searchParams }, "", searchParams);
  });
}

searchClear();