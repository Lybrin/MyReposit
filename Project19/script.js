let btn = document.getElementById('result'),
    costTotal = document.getElementById('cost'),
    kkalTotal = document.getElementById('kkal');

function getResult() {
    let menu = document.getElementsByClassName('menu'),
        cost = 0,
        kkal = 0;

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].checked) {
            cost += parseFloat(menu[i].getAttribute('data-cost'));
            kkal += parseFloat(menu[i].getAttribute('data-kkal'));
        }
    }

    costTotal.textContent = cost;
    kkalTotal.textContent = kkal;
}

getResult();

btn.addEventListener('click', getResult);