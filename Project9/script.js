let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    head = document.getElementsByTagName('h1');


box.style.backgroundColor = 'brown';
// btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
// head[0].style.fontFamily = 'Arial, Times, serif';

/* for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}
 */
heart.forEach(function(item, i, hearts) {
   item.style.backgroundColor = 'blue';
});

// let div = document.createElement('div');
//     text = document.createTextNode('Тут был я');

// div.classList.add('black');

// document.body.appendChild(div); //вставить в конец "body"
// wrapper.appendChild(div); //вставить в конец "wrapper"

// div.innerHTML = '<h5>Hello, World!</h5>';
// div.textContent = 'Hello, World!';

// document.body.insertBefore(div, circle[0]); //вставить вначало перед circle[0]
// document.body.removeChild(circle[1]); //удалить дочерний элемент circle[1]

// wrapper.removeChild(heart[1]);
// document.body.replaceChild(btn[1], circle[1]);

document.body.removeChild(btn[0]);

// console.log(div);

