/* Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.

Примеры:
// Общие уникальные элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3
 // Общие уникальные элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1
 // Общие уникальные элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
 // Нет элементов
getSameCount([], []); // 0

Для получения массива без повторяющихся элементов, используйте uniq из библиотеки lodash. */

import _ from 'lodash';

const getSameCount = (arr1, arr2) => {
  const cleanArr1 = _.uniq(arr1);
  const cleanArr2 = _.uniq(arr2);
  let result = 0;
  for (const item of cleanArr1) {
    const commonItem = cleanArr2.includes(item) ? 1 : 0;
    result += commonItem;
  }
  return result;
};

export default getSameCount;

console.log(getSameCount([], []));//0
console.log(getSameCount([1, 2], []));//0
console.log(getSameCount([0], ['one', 'two']));//0
console.log(getSameCount([5, 3, 3], ['one', 'two']));//0
console.log(getSameCount([1, 2, 3], [2, 8, 10]));//1
console.log(getSameCount([1, 8, 2, 3], [2, 8, 10]));//2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2]));//3
console.log(getSameCount([1, 1, 1, 2, 3], [1, 1]));//1
console.log(getSameCount([1, 1, 2, 3], [2, 3]));//2
