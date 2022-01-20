/* Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str).*/

import { length, toUpperCase } from './strings.js';

const firstLetterInUpperCase = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (i === 0 || str[i - 1] === ' ') {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};

export default firstLetterInUpperCase;

console.log(firstLetterInUpperCase('hello, world!'));//'Hello, World!'
console.log(firstLetterInUpperCase('  hello,   world!'));//'  Hello,   World!'
console.log(firstLetterInUpperCase(' many different words inside sentence'));//' Many Different Words Inside Sentence'
