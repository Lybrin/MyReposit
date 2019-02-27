window.addEventListener('DOMContentLoaded', function() { //выполнять JS-код, когда загрузилась DOM-структура web-страницы

    'use strict'; //перевести в строгий режим,код будет работать по современному стандарту ES5+

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let tabPhoto = document.querySelectorAll('.dot'),
        wrapPhoto = document.querySelector('.slider-dots'),
        sliderItem = document.querySelectorAll('.slider-item');

    function hidePhoto(a) {
        for (let i = a; i < sliderItem.length; i++) {
            sliderItem[i].classList.remove('show');
            sliderItem[i].classList.add('hide');
        }
    }

    // hidePhoto(1);

});

