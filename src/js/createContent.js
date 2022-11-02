function createContent(id, title, text) {

  let html = `<div class="content" id="${id}">
                <h2 class="content__title">${title}</h2>
                <div class="content__text">
                  ${text}
                </div>
                    <input type="checkbox" class="content__checkbox content__checkbox--${id} custom-checkbox">
                    <label></label>
                </div>`;

  document.querySelector('.js-container-content').innerHTML += html;
}