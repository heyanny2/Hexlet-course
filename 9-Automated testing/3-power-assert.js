/*Напишите тесты для функции indexOf(items, value, [fromIndex=0]), которая возвращает индекс первого вхождения переданного элемента в массив,
начиная поиск с индекса fromIndex, значение которого по умолчанию равно нулю:

indexOf([1, 2, 1, 2], 2); // 1
indexOf([1, 2, 1, 2], 2, 2); // 3
indexOf([2, 'one', 'cat', false], 8); // -1 */

//Если не задано значение по умолчанию
assert(indexOf([1, 3, 8, 4, 1, 6], 8) === 2);
//Если задано значение по умолчанию и аргумент повтораяется
assert(indexOf([1, 3, 8, 4, 1, 6], 1, 1) === 4);
//Есл не задано значение по умолчанию и аргумент повтораяется
assert(indexOf([1, 3, 8, 4, 1, 6], 1) === 0);
//если индекс превышает длину массива
assert(indexOf([1, 3, 8, 4, 1, 6], 10) === -1);
