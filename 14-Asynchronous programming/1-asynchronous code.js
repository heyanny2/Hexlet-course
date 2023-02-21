/*Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.
import print from './printer.js';
print('./myfile');
*/

export default (filepath) => fs.readFile(
  filepath,
  'utf-8',
  (_error, data) => console.log(data),
);
