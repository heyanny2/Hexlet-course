/* В проекте имеются три функции по работе с массивами: get(), indexOf() и slice(). 
Программист, работавший на этом проекте до вас, недостаточно ответственно отнесся к написанию тестов. 
Вам нужно исправить этот недочет и дописать недостающие тесты.

Выполните в терминале команду make test-coverage и сгенерируйте отчет по покрытию кода тестами.
Изучите статистику и допишите тесты на те функции, которые не достаточно покрыты тестами.

Допишите необходимые тесты на функции get(), indexOf() и slice(). Функции работают следующим образом:

1. Функция get(coll, index, defaultValue = null) извлекает из массива значение по указанному индексу, если индекс существует. 
Если индекс не существует, возвращает значение по умолчанию.

2. Функция indexOf(coll, value, fromIndex) возвращает первый индекс, по которому переданное значение может быть найдено в массиве или -1, если такого значения нет. 
Аргументы:
coll - массив, в котором ведется поиск.
value - значение, поиск которого ведется в массиве .
fromIndex - индекс, с которого начинается поиск элемента, по умолчанию равен нулю. Если значение fromIndex отрицательное, то оно используется, как смещение с конца массива.

3.Функция slice(coll, begin, end) возвращает новый массив, содержащий копию части исходного массива. 
Аргументы:
coll - исходный массив.
begin - индекс, по которому начинается извлечение. Если индекс отрицательный, begin указывает смещение от конца последовательности. По умолчанию равен нулю.
end - индекс, по которому заканчивается извлечение (не включая элемент с индексом end). Если индекс отрицательный, end указывает смещение от конца последовательности. 
По умолчанию равен длине исходного массива.*/

//make test-coverage
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------|---------|----------|---------|---------|-------------------
All files   |   69.23 |    52.38 |     100 |   69.23 |                   
 get.js     |     100 |      100 |     100 |     100 |                   
 indexOf.js |      60 |    42.85 |     100 |      60 | 7,12-15           
 slice.js   |      60 |       25 |     100 |      60 | 6,11-14           
------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.434 s

test('testing function get()', () => {
  const actual1 = get([1, 2, 3], 1, 'a');
  expect(actual1).toBe(2);

  const actual2 = get([1, 2, 3], 4, 'a');
  expect(actual2).toBe('a');

  const actual3 = get([1, 2, 3], 4);
  expect(actual3).toBeNull();
});

test('testing function slice()', () => {
  const actual1 = slice([1, 2, 3, 4, 5, 6], 1, 4);
  expect(actual1).toEqual([2, 3, 4]);

  // BEGIN
  const actual2 = slice([], 1, 4);
  expect(actual2).toEqual([]);

  const actual3 = slice([1, 2, 3, 4, 5, 6], -8, -2);
  expect(actual3).toEqual([1, 2, 3, 4]);

  const actual4 = slice([1, 2, 3, 4, 5, 6], -5, -3);
  expect(actual4).toEqual([2, 3]);
  // END
});

test('testing function indexOf()', () => {
  const actual1 = indexOf([2, 7, 3, 2, 4], 2);
  expect(actual1).toBe(0);

  // BEGIN
  const actual2 = indexOf([2, 7, 3, 2, 4, 5, 3], 3, -3);
  expect(actual2).toBe(6);

  const actual3 = indexOf([2, 7, 3, 2, 4], 2, -8);
  expect(actual3).toBe(0);

  const actual4 = indexOf([], 0);
  expect(actual4).toBe(-1);
  // END
});

//make test-coverage

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------|---------|----------|---------|---------|-------------------
All files   |     100 |    90.47 |     100 |     100 |                   
 get.js     |     100 |      100 |     100 |     100 |                   
 indexOf.js |     100 |      100 |     100 |     100 |                   
 slice.js   |     100 |       75 |     100 |     100 | 3                 
------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.847 s, estimated 2 s
