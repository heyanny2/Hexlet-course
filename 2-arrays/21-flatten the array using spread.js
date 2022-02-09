/* Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, 
то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

В js эта функция реализована как метод flat() у массивов. Его использовать нельзя. */

export const flatten = (arr) => {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result = [...result, item];
    }
  }
  return result;
};

console.log(flatten([]));//[]
console.log(flatten([1, [3, 2], 9]));//[1, 3, 2, 9]
console.log(flatten([[9, 8], [], [0], 10]));//[9, 8, 0, 10]
console.log(flatten([1, [[2], [3]], [9]]));//[1, [2], [3], [9]]
