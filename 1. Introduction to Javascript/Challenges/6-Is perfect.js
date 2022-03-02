/* Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3. */

const isPerfect = (num) => {
  if (num < 6) {
    return false;
  }
  let div = 1;
  let result = 0;
  while (div <= num / 2) {
    if (num % div === 0) {
      result += div;
    }
    div += 1;
  }

  return result === num;
};

export default isPerfect;

console.log(isPerfect(6));//true
console.log(isPerfect(28));//true
console.log(isPerfect(496));//true
console.log(isPerfect(8128));//true
console.log(isPerfect(-6));//false
console.log(isPerfect(-28));//false
console.log(isPerfect(44));//false
console.log(isPerfect(0));//false
console.log(isPerfect(10));//false
