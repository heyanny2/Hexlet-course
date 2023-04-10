/*Напишите регулярное выражение, которое соответствует подстрокам one, two или three.*/

let regex = /one|two|three/;

//tests
let test = [
  'one',//true
  'two',//true
  'three',//true
  'four',//false
  '/five',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  'one',
  'two',
  'three',
]; */
