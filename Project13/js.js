/* let timerId = setTimeout(sayHello, 3000); //запуск ф-ции с задержкой в миллисекундах
clearTimeout(timerId); // способ отмены 
 */

/* let timerId = setInterval(sayHello, 3000); //запуск ф-ции c постоянным повтором в 3 секунды
clearTimeout(timerId); // способ отмены функции setInterval

function sayHello() {
    console.log('Hello, World!');
} */

/* let timerId = setTimeout(function log() {
    console.log('Hello!');
    setTimeout(log, 2000);
}) */

let btn = document.querySelector('.animate'),
    elem = document.querySelector('.big_square .little_square');

function myAnimation() {
    let posX = 0, posY = 0;

    let id = setInterval(frame, 10); //каждые 10 мс запускаем ф-цию frame()
    function frame() {  //меняются top и left у малого квадрата
        if (posX >= 350 || posY >= 350) {
            clearInterval(id);
            console.log(elem.style.top);
            console.log(elem.style.left);
        } else {
            posX++;
            posY += Math.sin((Math.PI/16)*posX);

            elem.style.top = posY + 'px';
            elem.style.left = posX + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && (event.target.matches('button.first'))) {
        console.log("Hello!");
    }
});