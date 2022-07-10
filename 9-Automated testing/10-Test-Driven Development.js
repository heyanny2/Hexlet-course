/* 1. Напишите тесты для функции fill(coll, value, start, end), которая заполняет элементы массива переданным значением, 
начиная со старта и заканчивая (но не включая) конечной позицией. Функция меняет исходный массив!

Функция принимает следующие аргументы:

coll – массив, элементы которого будут заполнены
value – значение, которым будут заполнены элементы массива
start – стартовая позиция, по умолчанию равна нулю
end – конечная позиция, по умолчанию равна длине массива

2. Реализуйте функцию fill(coll, value, start, end), основываясь на описании и примерах её работы. 
Функция работает с неотрицательными значениями start и end. Экспортируйте функцию по умолчанию.*/

//tests

let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('common case', () => {
  fill(array, '*', 1, 3);
  expect(array).toEqual([1, '*', '*', 4]);
});

test('default values', () => {
  fill(array, '*');
  expect(array).toEqual(['*', '*', '*', '*']);
});

test('start > coll.length, end = default value', () => {
  fill(array, '*', 5);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('end > coll.length', () => {
  fill(array, '*', 0, 10);
  expect(array).toEqual(['*', '*', '*', '*']);
});

test('start >= end', () => {
  fill(array, '*', 2, 2);
  expect(array).toEqual([1, 2, 3, 4]);
});

//function

const fill = (coll, value, start = 0, end = coll.length) => {
  const collLength = coll.length;
  const normalizedStart = start > collLength ? end : start;
  const normalizedEnd = end > collLength ? collLength : end;

  for (let i = normalizedStart; i < normalizedEnd; i += 1) {
    coll[i] = value;
  }
  return coll;
};

export default fill;
