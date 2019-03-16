function userProgress(time) {
    let start = 0,
        progressElement = document.getElementById('user-progress'); //элемент прогресс-бара
        
    time = Math.round(time*1000/100);

    let intervalId = setInterval(() => {
        if (start > 100) {
            clearInterval(intervalId);
            userProgressCallBack();
        }else {
            progressElement.value = start;
        }
        start++;
    }, time);
}

function userProgressCallBack() {
    //your code
    document.querySelector('.hidden-block').style.display = 'block';
}

userProgress(1);