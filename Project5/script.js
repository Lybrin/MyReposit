/* let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello, world!");

console.log(num); */

/* let calc = function(a, b) {
    return (a + b);
}
 */

/* let calc = (a, b) => a+b;

console.log(calc(3, 4));

console.log(calc(8, 4));

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase()); */

/* let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' ' + 'имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);



let arr = ["first", 2, 3, "four", 5];


arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});

 console.log(arr);




 let mass = [1, 3, 4, 6, 7];

 for (let key of mass) {
     console.log(key);
 }

  */

/* 
let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr); */

/* let arr = ["aawe", "zzz", 'pp', 'raw'],
    i = arr.join(', ');

console.log(i); */

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr);