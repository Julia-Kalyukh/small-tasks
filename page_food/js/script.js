window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
          calc = require('./modules/calc'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');
          
    tabs();
    calc();
    modal();
    timer();
    cards();
    forms();
    slider();
});

// Запуск json-server в терминале:
// npx json-server db.json