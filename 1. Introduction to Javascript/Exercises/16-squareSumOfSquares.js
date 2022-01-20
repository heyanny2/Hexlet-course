/* Реализуйте функцию square(), которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел. */

const square = (num) => num * num;

const sumOfSquares = (a, b) => square(a) + square(b);

const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));

console.log(4);//16
console.log(11);//121
console.log(3, 8);//73
console.log(5, -11);//146
console.log(35, 17);//2292196
console.log(-4, 6);//2704
