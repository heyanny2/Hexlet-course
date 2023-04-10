/*Напишите регулярное выражение, в котором:

Первый и второй символы — это цифры
Третий символ — это /
Четвертый символ — любой, кроме a-z*/

let regex = /\d\d\/[^a-z]/;

//tests

let test = [
  '23/A',//true
  '83/#',//true
  '92/?',//true
  '92/8'//true
  '23/a',//false
  '53/e',//false
  'd3/3',//false
  '3d/2',//false
  '2383',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  '23/A',
  '83/#',
  '92/?',
  '92/8'
]; */
