/* Напишите регулярное выражение ruby1.*, в котором вместо символа * может находиться любой символ. */

let regex = /ruby1\../;

//tests
let test = [
  'ruby1.9',//true
  'ruby1.h',//true
  'abcruby1.8xyz',//true
  'ruby1a9',//false
  'ruby2.5',//false
  'ruby1111',//false
  'ruby10',//false
  'aaaruby1.'//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  'ruby1.9',//true
  'ruby1.h',//true
  'abcruby1.8xyz'
]; */
