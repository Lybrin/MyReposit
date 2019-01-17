'use strict'; //пишем на стандарте ES6

var leftBorderWidth = 1; //переменная, объявленная var, создаётся сразу и работает везде

let second = 2; //переменная, объявленная let, создаётся только когда до неё код доходит
const pi = 3.14; //константа, которую нельзя поменять


let third = 3;


console.log(second);
console.log(third);

//Типы Данные в JavaScript
var number = 5; //число
var string = "Привет!"; //строка
var sym = Symbol(); //символ
var boolean = true; //логический тип данных
null;
undefined;
var obj = {};

let something;
console.log(something); //нет значения

let person = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(person.name);

console.log(person["name"]);


let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);

// alert("Hello, world!");

// let answer = confirm("Are you here?");
// console.log(answer);

/* let answer = +prompt("Есть ли вам 18?", "Да"); //"+" означает сделать число
console.log(answer);

console.log("arr" + "-object");
 */

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);


console.log(5%2);
console.log("2" === 2);


let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);