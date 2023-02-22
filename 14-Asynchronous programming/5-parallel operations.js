/*Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории не включая поддиректории. Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async

Примеры
import { getDirectorySize } from './info.js';
 
getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
}); */

export const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (err1, filenames) => {
    if (err1) {
      cb(err1);
      return;
    }
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (err3, stats) => {
      if (err3) {
        cb(err3);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(null, sum);
    });
  });
};
