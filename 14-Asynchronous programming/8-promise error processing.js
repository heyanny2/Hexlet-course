/*Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует. Если файл существует, то функция должна успешно завершиться.

import { touch } from './file.js';
 
touch('/myfile').then(() => console.log('created!'));
 
// Повторный вызов успешно завершается
touch('/myfile').then(() => console.log('created!'));
 */

export const touch = (filepath) => fsp.access(filepath)
  .catch(() => fsp.writeFile(filepath, ''));
