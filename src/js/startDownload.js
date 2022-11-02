function startDownload() {
  let url = new URLSearchParams(window.location.search);
  let searchParams = url.get("search");


  if (searchParams) {
    document.querySelector('.js-input-search').value = searchParams;
    searchStart(searchParams);
    searchClick();
  } else {
    loadingFirst();
  }

}

document.addEventListener("DOMContentLoaded", function () {
  startDownload();
});