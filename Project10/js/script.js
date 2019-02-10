let butMenu = document.getElementsByTagName('li'), //элемент li
    butParent = document.getElementsByClassName('menu'); //родитель li

butParent[0].insertBefore(butMenu[2], butMenu[1]); //поменять местами 3-ий и 2-ой элемент

let liNew = document.createElement('li'); //создать новый элемент li

liNew.textContent = 'Пятый пункт';
liNew.className = 'menu-item';
butParent[0].appendChild(liNew); //вставить новый элемент li в конец родителя li

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let headerApple = document.getElementsByClassName('title'),
    reklama = document.getElementsByClassName('adv');

headerApple[0].textContent = 'Мы продаем только подлинную технику Apple';
reklama[0].parentNode.removeChild(reklama[0]); //удалить блок с рекламой (класс 'adv')

let requestApple = prompt('Как вы относитель с технике Apple?'),
    divRequest = document.getElementsByClassName('prompt');

divRequest[0].textContent = requestApple;

