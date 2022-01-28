/*Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, 
у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.
Если на вход функции передан пустой массив, то она должна вернуть пустой массив. */

const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }
  const newColl = [];
  for (const item of coll) {
    if (Math.abs(coll[0] % 2) === Math.abs(item % 2)) {
      newColl.push(item);
    }
  }
  return newColl;
};

export default getSameParity;

const result1 = [];
console.log(getSameParity(result1));//[]

const result2 = [1, 2, 3];
console.log(getSameParity(result2));//[1, 3]

const result3 = [1, 2, 8];
console.log(getSameParity(result3));//[1]

const result4 = [2, 2, 8];
console.log(getSameParity(result4));//[2, 2, 8]

const result5 = [1, 2, -3];
console.log(getSameParity(result5));//[1, -3]

const result6 = [-3, 2, 1];
console.log(getSameParity(result6));//[-3, 1]

const result7 = [4, 1, 8];
console.log(getSameParity(result7));//[4, 8]
