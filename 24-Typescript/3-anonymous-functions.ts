/*Напишите функцию, которая возвращает массив четных чисел из массива numbers.*/

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

function getEvenNumbers() {
  return numbers.filter((number) => (number % 2 == 0))
}

export default getEvenNumbers;
