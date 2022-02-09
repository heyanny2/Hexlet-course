/* Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.
Используйте rest-оператор вместе с деструктуризацией, для извлечения первого элемента и всех остальных. */

export const getMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let [maxNumber, ...rest] = arr;
  for (let item of rest) {
    if (item > maxNumber) {
      maxNumber = item;
    }
  }
  return maxNumber;
};

console.log(getMax([]));//null
console.log(getMax([1, 10, 8]));//10
console.log(getMax([11, -3, 8, 1]));//11
console.log(getMax([1, 8, -3, 11]));//11
