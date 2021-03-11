"use strict";

// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number)

// const obj = {
//     a: 10
// }
// obj.a = 5; 
// console.log(obj); 
// alert('hello')
// const result = confirm("r u here");
// console.log(result);
// const answer = prompt("Vam est 18?","18 ")
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('kak vashe imy?', '');
// answers[1] = prompt('kak vashe family?', '');
// answers[2 ] = prompt('skok vam let?', '');
// document.write(answers);
// console.log(typeof(answers));
// 12 video


// // // ZADANIE!!!!!!!!!!!!!!!!!!!!!!!!! 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его', '');

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error  ");
                i--;
            }
        }
    },
    detectPersonaLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("malo");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("norm");
        } else if (personalMovieDB.count >= 30) {
            console.log("kinoman");
        } else {
            console.log("error ");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i }`);
            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели ихи вообще ');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер  ${i + 1 } это ${item}`);
        });
    }
};
//   2 variant
// for (let i = 1; i <= 3; i++) {
//     let genres = prompt(`Введите ваши любимые жанры чере ззапятую`).toLowerCase() ;
//     if(genres === '' || genres === null) {
//         console.log('Вы ввели некорректные данные или не ввели ихи вообще ');
//         i--;
//     } else {
//         personalMovieDB.genres = genres.split(', '); 
//         personalMovieDB.genres = genres.sort(); 

//     }
// }
// personalMovieDB.genres.forEach((item, i) => {
//     console.log(`Любимый жанр номер  ${i + 1 } это ${item}`); 
// });
// // // ZADANIE!!!!!!!!!!!!!!!!!!!!!!!!!








// // // // if (4 == 5) {
// // // //      console.log('ok!'); 
// // // // } else {
// // // //     console.log('error'); 
// // // // }
// // // const num = 50;
// // // switch (num) {
// // //     case 49:
// // //       console.log('neverno');
// // //     break;
// // //     case 100 :
// // //         console.log('neverno');
// // //       break;
// // //       case 50:
// // //         console.log('verno');
// // //       break;
// // //       default:
// // //         console.log('ne v etot raz');
// // //         break; 
// // // // }
// // // let num = 50;

// // // //  

// // // do {
// // //     console.log(num);
// // //     num++;
// // // }
// // // while (num < 55); 

// const str = "test";
// console.log(str.toUpperCase());
// console.log(str);
//  const logg = "hello world";
// //  console.log(logg.slice(6, 11));
//  console.log(logg.substr(6, 2));

//  const num = 12.2;
//  console.log(Math.round(num));
//  const test = "12px";
//  console.log(parseInt(test));

// // 19
// function first() {
//     setTimeout(function() {
//         console.log(1); 
//     }, 500);
// }
// function second () {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I learn ${lang}`);
//     callback();
// }
// function done() {
//     console.log('I done this work');

// }
// learnJS('JS', done);

// 20
// const options = {
//     name: 'test',
//     width: 1024,
//     length: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red '
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };
// options.makeTest();
// const {border, bg} = options.colors;
// console.log(border); 

// console.log(Object.keys(options).length);
// console.log(options.name);
// delete options.name;
// console.log(options);
// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`svoistvo ${i} imeet znachenie ${options[key][i ]}`);
//             counter++;
//         }
//     } else {
//         console.log(`svoistvo ${key} imeet znachenie ${options[key]}`);
//         counter++;

//     }
// } 
// console.log(counter);

// // // 21
// const arr = [1, 12, 32, 6, 8]; 
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//      return a - b;
// } 

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);
// arr.forEach(function(item, i, arr ) {
//     console.log(`${i}: ${item} vnutri massiva ${arr}`)
// });

// arr.pop();
// arr.push(10); 
// console.log(arr);
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// // }
// for (let value of arr) {
// //     console.log(value);
// // }
// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; ')); 


// 22
// let a = 5,
//     b = a;
// b = a + 5;
// console.log(a);
// console.log(b);
// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj; // ssilka передача по ссылке
// // copy.a = 10;
// // console.log(obj);
// // console.log(copy);
// function copy (mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
//  }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 9
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };
// // console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 5;
// console.log(add);
// console.log(clone);

//  const video = ['youtube', 'vimeo', 'rutube'],
//        blogs = ['wordpress', 'livejournal', 'blogger'],
//        internet = [...video, ...blogs, 'vk', 'facebook ' ]; 

// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c );
// }
// const num = [2, 3, 4];
// log(...num);
// const array = ['a', 'b' ];
// const newAaray = [...array];
// const q = {
//     one: 1,
//     two: 2
// };
// const newObject = {...q};
// console.log(newObject);

// 23
//  let str = "some";
//  let strObg = new String(str);
// //  console.log(typeof(str)); 
// //  console.log(typeof(strObg)); 
// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('hello');
//     }
// };
// const john = Object.create(soldier);
// // const john = {
// //     health: 100, 
// // };

// // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);
// // console.log(john.armor);
// john.sayHello();


// 26 vid
// to string 1)
// console.log(typeof(String(null)));
// // 2) конкретинация
// console.log(typeof(5 + ''));
// const num = 5;
// console.log("https:/vk.com/catalog/"  + num);
// const fontSiza = 25 + 'px';
// // t onumber 
// console.log(typeof(Number('2')));
// console.log(typeof(+'2'));
// console.log( (parseInt("15px", 10)));
// let ans = +prompt('hi', '');

// // boolean null 0 '' nan undefined 
// let switcher = 2;
// if (switcher) {
//     console.log('working...'); 
// }

// // 2
// console.log(typeof(Boolean('2')));
// console.log(typeof(!!('2')));

// 27 vid
// let x = 5; alert( x++ ); 5
// [ ] + false - null + true 
// console.log(typeof([] + false - null + true)); NaN
// let y = 1; 
// let x = y = 2; 
// alert(x); 

// console.log([ ] + 1 + 2); 12
// alert( "1"[0] ); 1 элмент строки 
// console.log(2 && 1 && null && 0 && undefined);и запинается на лжи
// console.log(!!( 1 && 2 ) === (1 && 2)); два воскл знака превращают значение в булиновое, булиновое не равно числу
//   3
// alert( null || 2 && 3 || 4 ); ИЛИ запинается на правде 3
// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 
// console.log( a === b ); net
// alert( typeof(+"Infinity" )); infinity

// console.log("Ёжик" > "яблоко"); фолс
// console.log(0 || "" || 2 || undefined || true || falsе) ; 


// 28
const box = document.getElementById('box');
// console.log(box);
const btns = document.getElementsByTagName('button');
//  [1]or
// console.log(btns[1]); 
const wrapper = document.querySelector('.wrapper');
const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = wrapper.querySelector('.heart');можно ещ так сделать
const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);

// });
const oneHeart = document.querySelector('div');

// console.log(oneHeart);
// 29
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = `background-color: blue; width:500px`;
// width:${num}px`;
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');
div.classList.add('black');
// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(di v);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[0]); stariy metod

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);
// div.innerHTML = '<h1>Hello world</h1>';
// // div.textContent = 'Hello';
// div.insertAdjacentHTML('beforeend', '<h2>Hi </h2>');

// 34
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector(' .box');

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('move');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
    box.addEventListener('touchend', (e) => {
            e.preventDefault();
            console.log('end ');
        });
    });
});

// cvoistva eventov 
// touches  выдает список всех пальцев которые сейчас взаимодкйтвует с экраном 
// targetTouches пальцы которые взаимодействуют именно с этим эдементом
//  chengedTouches список пальцев которые учасвствуют в текущем событии, например если собитые тач енd
// cобытие будет содержать палец который убран, даже если все другие остались
// пальцы совершившие определенное назначенное действие 
