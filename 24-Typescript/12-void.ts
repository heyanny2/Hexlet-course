/*Определите самостоятельно функцию forEach() для чисел.

Параметры функции:
1.Массив чисел
2.Анонимная функция, которая принимает на вход число и возвращает void.
У этой функции есть необязательный параметр — индекс элемента в массиве*/

function forEach(numbers: number[], callback: (n: number, index: number) => void): void {
  numbers.forEach((n, index) => callback(n, index));
}

export default forEach;
