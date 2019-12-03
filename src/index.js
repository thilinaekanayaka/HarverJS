/*
author : Thilina Ekanayaka
email : thilinaekanayaka@protonmail.com
contact : +94774657948
*/

const { getRandomWordSync, getRandomWord } = require("word-maker");

//Q1
for (let i = 1; i < 101; i++) {
  console.log(i + ": " + getRandomWordSync({ withErrors: false }));
}

//Q2
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
  else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
  else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
  else console.log(i + ": " + getRandomWordSync({ withErrors: false }));
}

//Q3 - Part A
for (let i = 1; i < 101; i++) {
  let promise = new Promise(function(resolve, reject) {
    resolve(getRandomWord({ withErrors: false }));
  });

  promise.then(function(value) {
    console.log(i + ": " + value);
  });
}

//Q3 - Part B
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
  else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
  else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
  else {
    let promise = new Promise(function(resolve, reject) {
      resolve(getRandomWord({ withErrors: false }));
    });

    promise.then(function(value) {
      console.log(i + ": " + value);
    });
  }
}

//Q4 - Part A
for (let i = 1; i < 101; i++) {
  try {
    if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
    else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
    else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
    else console.log(i + ": " + getRandomWordSync({ withErrors: true }));
  } catch (e) {
    console.log(i + ": It shouldn't break anything!");
  }
}

//Q4 - Part B
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
  else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
  else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
  else {
    let promise = new Promise(function(resolve, reject) {
      resolve(getRandomWord({ withErrors: true }));
    });

    promise
      .then(function(value) {
        console.log(i + ": " + value);
      })
      .catch(function() {
        console.log(i + ": It shouldn't break anything!");
      });
  }
}
