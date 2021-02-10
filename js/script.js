// "use strict";

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
// // answers[0] = prompt('kak vashe imy?', '');
// // answers[1] = prompt('kak vashe family?', '');
// // answers[2 ] = prompt('skok vam let?', '');
// // document.write(answers);
// console.log(typeof(answers));
 const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 }; 
 const a = prompt('Один из последних просмотренных фильмов?', ''),
       b = prompt('На сколько оцените его', ''),
       c =  prompt('Один из последних просмотренных фильмов?', ''),
       d = prompt('На сколько оцените его', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);