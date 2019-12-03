/*
author : Thilina Ekanayaka
email : thilinaekanayaka@protonmail.com
contact : +94774657948
*/

const { getRandomWordSync, getRandomWord } = require("word-maker");

//Q1
console.log("******************** Question 01 ****************************");
for (let i = 1; i < 101; i++) {
  console.log(i + ": " + getRandomWordSync({ withErrors: false }));
}

//Q2
console.log("******************** Question 02 ****************************");
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
  else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
  else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
  else console.log(i + ": " + getRandomWordSync({ withErrors: false }));
}

//Q3
console.log("******************** Question 03 - Part A ****************************");
for (let i = 1; i < 101; i++) {
  let promise = new Promise(function(resolve, reject) {
    resolve(getRandomWord({ withErrors: false }));
  });

  promise.then(function(value) {
    console.log(i + ": " + value);
  });
}

console.log("******************** Question 03 - Part B ****************************");