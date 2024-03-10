'use strict';

// const fs = require("fs");

// fs.writeFileSync(
//   "hello.txt",
//   "I am a from Kampala Uganda studying Computer Science from the US"
// );

const userName = 'Geoffrey Duncan Opiyo';
let myAge = 30;
const hasHobbies = true;
myAge = 33;

// Arrow Function
const summarizeUser = (userName, userAge, userHobbies) =>
  `My name is ${userName}. Age is ${userAge} and user has hobbies: ${userHobbies}`;

console.log(summarizeUser(userName, myAge, hasHobbies));

// JavaScript Object
const person = {
  name: 'Geoffrey',
  age: 33,
  greet() {
    console.log('Hi there, I am ' + this.age + ' again');
  },
};

person.greet();

// Destructuring

const { name, age } = person;
console.log(name, age);

// Async && Promise

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
