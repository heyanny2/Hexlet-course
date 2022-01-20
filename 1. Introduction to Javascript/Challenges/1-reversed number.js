/* Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

Примеры:

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98 */

const reversedNum = (num) => {
  const str = String(Math.abs(num));
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  const reversedStr = Number(result);
  return num < 0 ? -reversedStr : reversedStr;
};

export default reversedNum;

console.log(reversedNum(12));//21
console.log(reversedNum(-122));//-221
console.log(reversedNum(8900));//98
