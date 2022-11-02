function startDownload() {
  let url = new URLSearchParams(window.location.search);
  let searchParams = url.get("search");


  if (searchParams) {
    document.querySelector('.search__input').value = searchParams;
    searchStart(searchParams);
    searchClick();
  } else {
    loadingFirst();
  }

}

document.addEventListener("DOMContentLoaded", function () {
  startDownload();
});