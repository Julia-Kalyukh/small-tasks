// Функция получает JSON-файл и перебирает массив
function searchStart(valueSearch) {

  (async () => {
    try {
      let searchResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      let searchData = await searchResponse.json();

      searchData.forEach((t) => {

        let id = t.id,
          title = t.title,
          text = t.body;

        // Если в заголовке есть передаваемый параметр
        let titleSearch = title.includes(valueSearch);

        if (titleSearch) {
          createContent(id, title, text); // file: createContent.js
        } else {
          // Очищаем контейнер
          document.querySelector('.js-container-content').innerHTML += '';
        }
      });

      await darkThemeAdd();               // file: darkThemeAdd;

    } catch (err) {
      document.querySelector('.js-container-content').innerHTML = "Произошла ошибка";
    }
  })();
}