/*
author : Thilina Ekanayaka
email : thilinaekanayaka@protonmail.com
contact : +94774657948
*/

const { getRandomWordSync, getRandomWord } = require("word-maker");

// Q1;
for (let i = 1; i < 101; i++)
  console.log(i + ": " + getRandomWordSync({ withErrors: false }));

// Q2
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
  else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
  else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
  else console.log(i + ": " + getRandomWordSync({ withErrors: false }));
}

// Q3 - Part A
async function printRandomWord() {
  for (let i = 1; i < 101; i++)
    console.log(i + ": " + (await getRandomWord({ withErrors: false })));
}
printRandomWord();

// Q3 - Part B
async function printFizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
    else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
    else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
    else console.log(i + ": " + (await getRandomWord({ withErrors: false })));
  }
}
printFizzBuzz();

// Q4 - Part A
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
async function printFizzBuzzWithError() {
  for (let i = 1; i < 101; i++) {
    try {
      if (i % 3 == 0 && i % 5 != 0) console.log(i + ": Fizz");
      else if (i % 5 == 0 && i % 3 != 0) console.log(i + ": Buzz");
      else if (i % 3 == 0 && i % 5 == 0) console.log(i + ": FizzBuzz");
      else console.log(i + ": " + (await getRandomWord({ withErrors: true })));
    } catch (e) {
      console.log(i + ": It shouldn't break anything!");
    }
  }
}
printFizzBuzzWithError();
