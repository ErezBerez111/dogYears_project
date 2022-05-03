//my age in Human years
var myAge = 24;
//variable I will use to express my first two human years in dog years.
var earlyYears = 2;
earlyYears = earlyYears * 10.5;
//subtracting 2 from my age becouse we already took two years into account beforehand, on our journy to express my age in dog years. 
var laterYears = (myAge - 2);
// The rest of my years as a human expressed in dog years
laterYears = laterYears * 4;
//combining my early years and later years
myAgeInDogYears = (earlyYears + laterYears);
//my name in lowercase letters
var myName = 'Erez'.toLowerCase();
//outputing my age in do years
console.log("My Name is " + myName + " I am " + myAge + " years old in human years which is " + myAgeInDogYears + " years old in dog years.");
