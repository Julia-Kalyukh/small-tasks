function searchClear() {
  let btnClear = document.querySelector('.js-btn-clear');

  btnClear.addEventListener('click', function () {
    document.querySelector('.js-container-content').innerHTML = '';
    document.querySelector('.js-input-search').value = '';
    loadingFirst();
    let searchParams = window.location.protocol + "//" + window.location.host + window.location.pathname + ``;
    window.history.pushState({ path: searchParams }, "", searchParams);
  });
}

searchClear();