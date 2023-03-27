/*Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов, написанных с использованием kebab нотации, в camelCase нотацию: text-center => textCenter

Попробуйте решить эту задачу без использования регулярных выражений.

Примеры
// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body> */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import camelCase from 'lodash/camelCase';

export default (document) => {
  const allNodes = [...document.body.getElementsByTagName('*')];
  allNodes.forEach((el) => {
    const classes = el.classList;
    classes.forEach((curClass) => classes.replace(curClass, camelCase(curClass)));
  });
};
