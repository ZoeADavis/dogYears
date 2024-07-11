let myAge = 20; //my current age
let earlyYears = 2; //first 2 years of dog life
earlyYears = earlyYears * 10.5; //first 2 year count as 10.5 dog years
let laterYears = myAge - 2; //accounting for first 2 dog years
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears;
let name = 'Zoe'.toLowerCase();
console.log(`My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)