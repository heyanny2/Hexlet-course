/* Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2
Примеры
addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8 */

import { length } from './strings.js'

const sum = (num) => {
  const str = String(num);
  let result = 0;
  for (let i = length(str) - 1; i >= 0; i--) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(result);
  }
  return result;
};

export default addDigits;
