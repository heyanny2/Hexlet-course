/*Напишите регулярное выражение, которое находит электронную почту, удовлетворяющую следующим условиям:

Часть до @ должна содержать только символы класса \w в количестве не менее одного
Часть после @ и до ., после которой начинается домен, должна содержать только буквы и быть не короче трех символов (например, hexlet)
Часть после . может содержать только буквы и быть от двух до пяти символов в длину (например, io)*/

let regex = /^\w{1,}@[A-Za-z]{3,}\.[A-Za-z]{2,5}$/;

//tests
let test = [
  'suPport@hExlet.io',//true
  'in9Fo@hexlet.io',//true
  'in_fo@goOgle.com',//true
  'i@you.cOm',//true
  'support@hexletio',//false
  '^%@hexlet.io',//false
  'info@he.xlet.io',//false
  'info@he.io',//false
  '!info@hexlet.io',//false
  'info@hexlet.i',//false
  'info@hexlet.ioioio',//false
  'info@1hexlet.io',//false
  'info@hexlet.i3',//false
  'suPport@hExlet_.io',//false
  'suPport@hExlet.i^o',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  'suPport@hExlet.io',
  'in9Fo@hexlet.io',
  'in_fo@goOgle.com',
  'i@you.cOm',
]; */
Footer
