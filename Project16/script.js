window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let img = document.querySelectorAll('img');

    function removeAllBordered() {
        for (let i = 0; i < img.length; i++) {
            img[i].classList.remove('bordered');
        }
    }

    img.forEach(function(item, i) {
        if (i < 3) {
            item.addEventListener('click', function (event) {
                let target = event.target;
                removeAllBordered();
                target.classList.add('bordered');
            });
        }
    });
    
});