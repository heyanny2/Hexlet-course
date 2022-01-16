/* Напишите функцию isPrime(). Она принимает число и возвращает true, если число является простым, и false в ином случае.

Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. 
Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

Используйте цикл for и арифметические шорткаты. */

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let div = 2; div <= (num / 2); div++) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};
// END

console.log(isPrime(0));//false
console.log(isPrime(1));//false
console.log(isPrime(2));//true
console.log(isPrime(33));//false
console.log(isPrime(-20));//false
console.log(isPrime(128));//false
console.log(isPrime(17));//true
console.log(isPrime(13));//true
