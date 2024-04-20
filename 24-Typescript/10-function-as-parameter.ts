/*Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат. Последний будет использоваться для проверки каждого числа на соответствие требованиям:

const numbers = [1, -5, 2, 3, 4, 133];
filter(numbers, (n) => n > 3); // [4, 133]
filter(numbers, (n) => n % 2 == 0); // [2, 4]

Параметры функции:
1.Массив чисел
2.Анонимная функция, которая принимает на вход число и возвращает логическое значение */

function filter(numbers: number[], callback: (n: number) => boolean): number[] {
  const result: number[] = [];
  numbers.forEach((n) => {
    if (callback(n)) {
      result.push(n);
    }
  });
  return result;
}

export default filter;
