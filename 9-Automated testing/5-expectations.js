/* Напишите тесты для функции gt(value, other), которая возвращает true в том случае, если value > other, и false в иных случаях.
=> gt(3, 1); // true
=> gt(3, 3); // false
=> gt(1, 3); // false */

test('getFunction', () => {
  //Если первое значение больше второго
  expect(gt(5, 1)).toBe(true);
  //Если значения одинаковые
  expect(gt(5, 5)).toBe(false);
  //Если первое значение отрицательное, а второе положительное
  expect(gt(-5, 1)).toBe(false);
});
