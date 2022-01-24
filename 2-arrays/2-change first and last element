/* Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. 
Если массив содержит меньше двух элементов, то он возвращается как есть. */

export const swap = (arr) => {
  const length = arr.length;
  if (length < 1) {
    return arr;
  }
  const first = arr[0];
  arr[0] = arr[length - 1];
  arr[length - 1] = first;
  return arr;
};

console.log(swap([]));//[]
console.log(swap([1]));//[ 1 ]
console.log(swap([1, 2]));//[ 2, 1 ]
console.log(swap(['one', 'two', 'three']));//[ 'three', 'two', 'one' ]
console.log(swap(['one', 'two', 'three', 'four']));//[ 'four', 'two', 'three', 'one' ]
