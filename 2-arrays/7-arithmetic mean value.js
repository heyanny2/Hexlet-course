/* Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного массива. 
В случае пустого массива функция должна вернуть значение null */

const calculateAverage = (coll) => {
  if (coll.length === 0) {
    return null;
  }

  let sum = 0;
  for (const value of coll) {
    sum += value;
  }
  return sum / coll.length;
};

export default calculateAverage;

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1));//38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures2));//38

const temperatures = [];
console.log(calculateAverage(temperatures));//null
