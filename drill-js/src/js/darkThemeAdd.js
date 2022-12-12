// Включает темную тему по чекбоксу
function darkThemeAdd() {
  let contentBox = document.querySelectorAll('.content');

  contentBox.forEach((item) => {
    let checkbox = item.querySelector('.content__checkbox');

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        item.classList.add('dark');
      } else {
        item.classList.remove('dark');
      }
    });
  })
}