/* Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. 
Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. 
Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20. */

const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  } if (begin === end) {
    return end;
  }
  return begin + sequenceSum(begin + 1, end);
};

console.log(sequenceSum(0, 0));//0
console.log(sequenceSum(1, 1));//1
console.log(sequenceSum(2, 12));//77
console.log(sequenceSum(1, 25));//325
console.log(sequenceSum(-3, -1));//-6
console.log(sequenceSum(-1, 18));//170
console.log(sequenceSum(5, -2));//NaN
