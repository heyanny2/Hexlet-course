/* Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null) */

const getValueFromArray = (arr, i, defValue = null) => {
  if (i < 0 || i >= arr.length) {
    return defValue;
  }
  return arr[i];
};

export default getValueFromArray;

const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];

const actual1 = getValueFromArray(cities, 0);
console.log(actual1);//moscow

const actual2 = getValueFromArray(cities, 2, 'default');
console.log(actual2);//berlin

const actual3 = getValueFromArray(cities, 7, false);
console.log(actual3);//false

const actual4 = getValueFromArray(cities, -1, 'oops');
console.log(actual4);//oops

const actual5 = getValueFromArray(cities, 7);
console.log(actual5);//null

const actual6 = getValueFromArray(cities, 4);
console.log(actual6);//

const actual7 = getValueFromArray(cities, 5, 'default');
console.log(actual7);// null

const actual8 = getValueFromArray(cities, 6, 'default');
console.log(actual8);//undefined
