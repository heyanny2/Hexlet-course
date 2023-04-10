/*Напишите регулярное выражение, которое находит подстроки, состоящие из:

Трех символов из класса a-z
:
Группы символов из первого условия*/

let regex = /([a-z]{3})\:\1/;

//tests
let test = [
  'mam:mam',//true
  'asd mmm:mmm mmm',//true
  'asdf:sdfa',//true
  'mmm:emu',//false
  'emu:mmm',//false
  'mmm mmm',//false
  ' aa:aa ',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  'mam:mam',
  'asd mmm:mmm mmm',
  'asdf:sdfa',
]; */
