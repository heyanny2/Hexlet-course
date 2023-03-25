/*Внутри <body> расположена статья состоящая из параграфов и других элементов, таких как таблицы или картинки. 
Задача состоит в том, чтобы достать текст из параграфов, пропуская все остальные элементы. Пример страницы можно посмотреть в веб-доступе.

src/extractor.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход document.documentElement, 
извлекает из него параграфы и возвращает массив из их содержимого.
Не забудьте очистить данные от концевых пробелов и переводов строк с помощью trim() 

<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <p>
      First paragraph
    </p>
    <table border="1">
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
    </table>
  </body>
</html>
import extractData from './extractor.js';
 
const data = extractData(document.documentElement);
console.log(data);
// [
//   'First paragraph'
// ]
src/index.js
Проверьте как работает вновь созданная функция на странице доступной в веб-доступе. 
Импортируйте функцию в index.js, выполните её с аргументом document.documentElement и распечатайте результат в консоль. 
Проверьте, что в консоль вывелись нужные данные.*/

//extractor.js
const extractData = (root) => {
  console.log(root.parentNode);
  const childrenArr = Array.from(root.parentNode.body.childNodes);
  return childrenArr
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim()); //я тут обращалась к textContent
    
};

export default extractData;

//index.js
import extractData from './extractor.js';

const data = extractData(document.documentElement);
console.log(data);
