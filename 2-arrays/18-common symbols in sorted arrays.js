/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их пересечение. 
Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей. */

const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const result = [];
  const sorted1 = arr1.sort();
  const sorted2 = arr2.sort();
  let i = 0;
  let y = 0;
  while (i < arr1.length && y < arr2.length) {
    const lastCommon = result[result.length - 1];
    if (sorted1[i] === sorted2[y] && sorted1[i] !== lastCommon) {
      result.push(arr1[i]);
      i++;
      y++;
    } else {
      (sorted1[i] > sorted2[y]) ? y++ : i++;
    }
  }
  return result;
};

export default getIntersectionOfSortedArrays;

console.log(getIntersectionOfSortedArrays([], []));//[]
console.log(getIntersectionOfSortedArrays([1], []));//[]
console.log(getIntersectionOfSortedArrays([], [2]));//[]
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]));//[]
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]));//[10, 24]
console.log(getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21]));//[10]
console.log(getIntersectionOfSortedArrays([10, 12, 19, 21], [3, 5, 10]));//[10]
console.log(getIntersectionOfSortedArrays([10, 13, 14, 18, 24, 30], [10, 11, 24]));//[10, 24]
console.log(getIntersectionOfSortedArrays([10, 11, 24, 30], [10, 13, 14, 18, 24, 30]));//[10, 24, 30]
console.log(getIntersectionOfSortedArrays([10, 11, 14, 18, 24, 30], [10, 13, 14, 18, 24, 30]));//[10, 14, 18, 24, 30]
console.log(getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]));//[1, 2]
