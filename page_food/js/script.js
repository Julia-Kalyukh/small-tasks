import tabs from './modules/tabs';
import calc from './modules/calc';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimeId = setTimeout(() => openModal('.modal', modalTimeId), 5000);

    calc();
    cards();
    forms('form', modalTimeId);
    modal('[data-modal]', '.modal', modalTimeId);
    timer('.timer', '2021-09-15 00:00:00 GMT+0300');
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    slider({
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        container: '.offer__slider',
        field: '.offer__slider-inner',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper'
    });
});

// Запуск json-server в терминале:
// npx json-server db.json

// Запуск webpack:
// npx webpack