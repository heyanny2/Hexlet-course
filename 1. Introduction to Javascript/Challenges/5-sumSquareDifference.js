/* Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.*/ 

const sumOfSquares = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i * i;
  }
  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  return sum * sum;
};

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n);

export default sumSquareDifference;

console.log(sumSquareDifference(1));//0
console.log(sumSquareDifference(5));//170
console.log(sumSquareDifference(10));//2640
console.log(sumSquareDifference(42));//789824
