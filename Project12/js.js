let btn = document.getElementsByTagName('button');

/* btn[0].onclick = function() {
    alert('Вы нажали первую кнопку!');
};

btn[0].onclick = function() {
    alert('Вы опять нажали первую кнопку!');
}; */

btn[0].addEventListener('click', function() {
    alert('Вы нажали первую кнопку!');
});

btn[0].addEventListener('click', function() {
    alert('Вы опять нажали первую кнопку!');
});

btn[0].addEventListener('mouseenter', function() {
    alert('Вы навели на первую кнопку');
});