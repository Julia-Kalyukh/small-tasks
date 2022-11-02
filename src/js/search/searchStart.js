function searchStart(valueSearch) {

  (async () => {
    try {
      let searchResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      let searchData = await searchResponse.json();

      searchData.forEach((t) => {

        let idr = t.id,
          titler = t.title,
          textr = t.body;

        let titleSearch = titler.includes(valueSearch);

        if (titleSearch) {
          createContent(idr, titler, textr);
        } else {
          document.querySelector('.main').innerHTML += '';
        }
      });

      await darkThemeAdd();

    } catch (err) {
      document.querySelector('.main').innerHTML = "Произошла ошибка";
    }
  })();
}