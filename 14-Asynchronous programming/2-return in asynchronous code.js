/*Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.

import write from './writer.js';
 
write('./myfile', 'data', () => {
  console.log('success');
});
 */

export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};
