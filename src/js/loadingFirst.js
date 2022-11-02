function loadingFirst() {
  (async () => {

    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7');
      let data = await response.json();

      await data.forEach((i) => {

        let id = i.id,
          title = i.title,
          text = i.body;

        createContent(id, title, text); // file: createContent.js
        searchClick();
      });

      await darkThemeAdd();

    } catch (err) {
      alert(err); // TypeError: failed to fetch
    }
  })();
}