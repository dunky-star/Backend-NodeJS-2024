'use strict';

// const fs = require("fs");

// fs.writeFileSync(
//   "hello.txt",
//   "I am a from Kampala Uganda studying Computer Science from the US"
// );

const userName = 'Geoffrey Duncan Opiyo';
let age = 30;
const hasHobbies = true;
age = 33;

const summarizeUser = (userName, userAge, userHobbies) => {
  return `Name is ${userName}. Age is ${userAge} and user has hobbies: ${userHobbies}`;
};

console.log(summarizeUser(name, age, hasHobbies));
