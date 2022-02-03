/* Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. 
Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !. */

const countUniqueChars = (str) => {
  const arr = [];
  for (const letter of str) {
    if (arr.includes(letter) === false) {
      arr.push(letter);
    }
  }
  return arr.length;
};

export default countUniqueChars;

console.log(countUniqueChars('You know nothing Jon Snow'));//13
console.log(countUniqueChars('Fear cuts deeper than swords.'));//16
console.log(countUniqueChars(''));//0
console.log(countUniqueChars('0'));//1
