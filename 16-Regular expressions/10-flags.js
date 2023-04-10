/*Напишите регулярное выражение, которое находит все подстроки python, заключенные в двойные " или одинарные ' кавычки. 
При этом вам нужно найти все варианты вне зависимости от регистра (Python, pytHon, pYThon и так далее).

Если будете использовать флаги, укажите их отдельной строкой:

yourRegexp // Здесь напишите регулярное выражение
mu // Здесь укажите необходимые флаги*/

let regex = /('|")python\1\ig/;

//tests
let test = [
  '"python"',//true
  "'Python'",//true
  "'PYTHON'",//true
  '"pyTHon"',//true
  'python"',//false
  "'PYTHON",//false
  'python',//false
  '\'pYThon"',//false
  '"pYThon\'',//false
];

let result = test.filter((string) => string.match(regex));
console.log(result); /* => [
  '"python"',
  "'Python'",
  "'PYTHON'",
  '"pyTHon"',
]; */
