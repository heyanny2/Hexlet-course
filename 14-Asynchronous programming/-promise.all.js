/* Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории (не включая поддиректории).

Пример:
import { getDirectorySize } from './file.js';
 
getDirectorySize('/usr/local/bin').then(console.log);
*/

export const getDirectorySize = (dirPath) => fsp.readdir(dirPath)
  .then((filenames) => {
    const filepaths = filenames.map((filename) => path.join(dirPath, filename));
    const promises = filepaths.map((filePath) => fsp.stat(filePath));
    return Promise.all(promises);
  })
  .then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
