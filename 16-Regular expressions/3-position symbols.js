/*Напишите регулярное выражение, которое находит строку, содержащую только support@hexlet.io. 
Такие строки, как something here support@hexlet.io и support@hexlet.io something here не попадают под регулярное выражение.*/

let regex = ^support@hexlet\.io$;

//tests
let test = [
  'support@hexlet.io',//true
  ' support@hexlet.io',//false
  'support@hexlet.io ',//false
  'support@hexletdio',//false
  '9support@hexlet.io',//false
  'support@hexlet.ioo',//false
  'support@hexlet9io',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); // => ['support@hexlet.io'];
