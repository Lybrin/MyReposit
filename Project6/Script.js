function first() {
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
//в итоге сначала выполнится second() а только потом first()

//Использование callback-функции (последовательность вызова функций не нарушается)
function learnJS(lang, callback) {
    console.log("Я учу: " + lang);
    callback();
}

function done() {
    console.log("Я прошёл 3-й урок!");
}

learnJS("JavaScript", done);