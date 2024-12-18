/*
author : Thilina Ekanayaka
email : thilinaekanayaka@protonmail.com
contact : +94774657948
*/

const { getRandomWordSync, getRandomWord } = require("word-maker");
var fs = require("fs");

let writeStream = fs.createWriteStream("Answers.txt");

async function main() {
  // Q1;
  writeStream.write("--- Question 01 ---\n");
  for (let i = 1; i < 101; i++)
    writeStream.write(i + ": " + getRandomWordSync({ withErrors: false }) + "\n");

  // Q2
  writeStream.write("--- Question 02 ---\n");
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 != 0) writeStream.write(i + ": Fizz\n");
    else if (i % 5 == 0 && i % 3 != 0) writeStream.write(i + ": Buzz\n");
    else if (i % 3 == 0 && i % 5 == 0) writeStream.write(i + ": FizzBuzz\n");
    else writeStream.write(i + ": " + getRandomWordSync({ withErrors: false }) + "\n");
  }

  // Q3 - Part A
  writeStream.write("--- Question 03 - Part A ---\n");
  for (let i = 1; i < 101; i++)
    writeStream.write(i + ": " + (await getRandomWord({ withErrors: false })) + "\n");

  // Q3 - Part B
  writeStream.write("--- Question 03 - Part B ---\n");
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 != 0) writeStream.write(i + ": Fizz\n");
    else if (i % 5 == 0 && i % 3 != 0) writeStream.write(i + ": Buzz\n");
    else if (i % 3 == 0 && i % 5 == 0) writeStream.write(i + ": FizzBuzz\n");
    else writeStream.write(i + ": " + (await getRandomWord({ withErrors: false })) + "\n");
  }

  // Q4 - Part A
  writeStream.write("--- Question 04 - Part A ---\n");
  for (let i = 1; i < 101; i++) {
    try {
      if (i % 3 == 0 && i % 5 != 0) writeStream.write(i + ": Fizz\n");
      else if (i % 5 == 0 && i % 3 != 0) writeStream.write(i + ": Buzz\n");
      else if (i % 3 == 0 && i % 5 == 0) writeStream.write(i + ": FizzBuzz\n");
      else writeStream.write(i + ": " + (getRandomWordSync({ withErrors: true })) + "\n");
    } catch (e) {
      writeStream.write(i + ": It shouldn't break anything!\n");
    }
  }

  // Q4 - Part B
  writeStream.write("--- Question 04 - Part B ---\n");
  for (let i = 1; i < 101; i++) {
    try {
      if (i % 3 == 0 && i % 5 != 0) writeStream.write(i + ": Fizz\n");
      else if (i % 5 == 0 && i % 3 != 0) writeStream.write(i + ": Buzz\n");
      else if (i % 3 == 0 && i % 5 == 0) writeStream.write(i + ": FizzBuzz\n");
      else writeStream.write(i + ": " + (await getRandomWord({ withErrors: true })) + "\n");
    } catch (e) {
      writeStream.write(i + ": It shouldn't break anything!\n");
    }
  }
}

main();

// Bonus Section

const promises = [];
const words = [];

async function FizzBuzzFast(counter) {
  if(counter % 3 == 0 && counter % 5 != 0)
    words[counter] = "Fizz";
  else if(counter % 5 == 0 && counter % 3 != 0)
    words[counter] = "Buzz";
  else if(counter % 3 == 0 && counter % 5 == 0)
    words[counter] = "FizzBuzz";
  else
    words[counter] = await getRandomWord({ slow: true });
}

async function fastMain() {
  for (let i = 1; i < 101; i++)
    promises.push(FizzBuzzFast(i));

  await Promise.all(promises);

  for (const [key, value] of Object.entries(words))
    console.log(key + ": " + value);
}

fastMain();