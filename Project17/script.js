let block = document.getElementById('test'),
    offX = document.getElementById('offx'),
    offY = document.getElementById('offy');


block.addEventListener('mousemove', function (event) {
    event = event || window.event;

    // console.log(event);
    offX.textContent = event.offsetX;
    offY.textContent = event.offsetY;
});
