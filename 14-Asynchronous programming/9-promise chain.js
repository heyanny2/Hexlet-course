/* Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует список переданных путей и возвращает массив (в промисе), 
с описанием того, что находится по каждому из путей в виде строк 'directory' и 'file'.

Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка, то значением для этого пути будет null. 
Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки (иначе придется задействовать механизм, который проходится в курсах далее).

Примеры
import { getTypes } from './file.js';
 
getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]
*/

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  const processPath = (filepath, result) => fsp.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
