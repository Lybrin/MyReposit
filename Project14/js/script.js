window.addEventListener('DOMContentLoaded', function () { //выполнять JS-код, когда загрузилась DOM-структура web-страницы

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

    info.addEventListener('click', function (event) {
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
        sliderItem = document.querySelectorAll('.slider-item'),
        arrowLeft = document.querySelector('.prev'),
        arrowRight = document.querySelector('.next'),
        indexPhoto = 0;

    function hidePhoto(a) {
        for (let i = a; i < sliderItem.length; i++) {
            sliderItem[i].classList.remove('show');
            sliderItem[i].classList.add('hide');
        }
    }

    hidePhoto(1); //скрыть все фото, начиная со 2-ой (1-ую оставляем)

    function showPhoto(b) {
        if (sliderItem[b].classList.contains('hide')) {
            sliderItem[b].classList.remove('hide');
            sliderItem[b].classList.add('show');
        }
    }


    function showActiveDot(c) {
        for (let i = 0; i < tabPhoto.length; i++) {
            if (tabPhoto[i].classList.contains('dot-active')) {
                tabPhoto[i].classList.remove('dot-active');
            }
        }

        tabPhoto[c].classList.add('dot-active');
    }

    wrapPhoto.addEventListener('click', function (event) { //обработки нажатия на точки под Фото
        let target = event.target;

        if (target && target.classList.contains('dot')) {
            for (let i = 0; i < tabPhoto.length; i++) {

                if (target == tabPhoto[i]) {
                    hidePhoto(0);
                    showPhoto(i);
                    indexPhoto = i;
                    showActiveDot(i);
                    break;
                }
            }
        }
    });

    arrowLeft.addEventListener('click', function () { //обработка клика на левую часть
        if (indexPhoto > 0) {
            hidePhoto(0);
            showPhoto(indexPhoto - 1);
            indexPhoto--;
            showActiveDot(indexPhoto);
        } else if (indexPhoto == 0) {
            hidePhoto(0);
            showPhoto(tabPhoto.length - 1);
            showActiveDot(tabPhoto.length - 1);
            indexPhoto = tabPhoto.length - 1;
        }
    });

    arrowRight.addEventListener('click', function () { //обработка клика на правую часть
        if (indexPhoto < tabPhoto.length - 1) {
            hidePhoto(0);
            showPhoto(indexPhoto + 1);
            indexPhoto++;
            showActiveDot(indexPhoto);
        } else if (indexPhoto == tabPhoto.length - 1) {
            hidePhoto(0);
            showPhoto(0);
            showActiveDot(0);
            indexPhoto = 0;
        }
    });
});