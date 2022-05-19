/* Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое всех переданных аргументов. 
Если функции не передать ни одного аргумента, то она должна вернуть null.*/

import _ from 'lodash';

const average = (...args) => {
  const length = args.length;

  if (length === 0) {
    return null;
  }
  return _.sum(args) / length;
};

export default average;

//tests

console.log(average(0));//0
console.log(average(0, 10));//5
console.log(average(-3, 4, 2, 10));//3.25
console.log(average());//null
