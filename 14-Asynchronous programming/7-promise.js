/*Реализуйте и экспортируйте асинхронную функцию reverse(), которая изменяет порядок расположения строк в файле на обратный. Функция должна перезаписать файл.

# file.txt
one
two
import { reverse } from './file.js';
 
reverse('file.txt');
// two
// one*/

export const reverse = (filepath) => fsp.readFile(filepath, 'utf-8')
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fsp.writeFile(filepath, preparedData);
  });
