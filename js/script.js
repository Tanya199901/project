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

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log("malo");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("norm");
    } else if (personalMovieDB.count >= 30) {
        console.log("kinoman");
    } else {
        console.log("error ");
    }
}
// detectPersonaLevel();

function showMyDB(hidden) {
    if (!hidden)
    console.log(personalMovieDB);
}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i }`); ;
    }
}

writeYourGenres();

console.log(personalMovieDB);
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