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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     }
// }
// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его', '');

//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             console.log("error  ");
//             i--;
//         }
//     }
// }
// // rememberMyFilms();

// function detectPersonaLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("malo");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("norm");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("kinoman");
//     } else {
//         console.log("error ");
//     }
// }
// // detectPersonaLevel();

// function showMyDB(hidden) {
//     if (!hidden)
//         console.log(personalMovieDB);
// }
// // showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i }`);;
//     }
// }

// writeYourGenres();

// console.log(personalMovieDB);
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