/*Напишите регулярное выражение, которое находит подстроки, состоящие из:

(
Хотя бы одного любого символа
)*/

let regex = /\(.+?\)/;

//tests
let test = [
  '(one) ($%@#$) (value1)',//true
  'test (^,ehu-) ) (t) (//)',//true
  '2383',//false
  '()',//false
  '() (',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  '(one) ($%@#$) (value1)',
  'test (^,ehu-) ) (t) (//)',
]; */
Footer
