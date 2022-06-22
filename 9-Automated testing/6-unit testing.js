/* Напишите тесты для объекта Validator. Этот валидатор проверяет корректность данных. Принцип его работы следующий:

1.С помощью метода addCheck(fn) в валидатор добавляются проверки. Каждая проверка представляет из себя функцию-предикат, 
которая принимает на вход проверяемое значение и возвращает либо true либо false в зависимости от того, соответствует ли значение требованиям проверки или нет. 
Проверки, добавленные в валидатор, накапливаются. Каждая следующая добавленная проверка дополняет предыдущую.
2.С помощью метода isValid(value), пользователь Validator проверяет соответствие значения всем добавленным проверкам. 
Если не было добавлено ни одной проверки, считается, что любое значение верное.
// Создаем объект валидатора
const validator = makeValidator();
// Так как не было добавлено ни одной проверки, любое значение верное
validator.isValid('some value'); // true
// Добавляем в валидатор проверку, что переданное значение больше 5
validator.addCheck((v) => v > 5);
// Добавляем проверку, что переданное значение четное
validator.addCheck((v) => v % 2 === 0);
// Проверяем значения на соответствие всем добавленным проверкам
validator.isValid(3); // false
validator.isValid(4); // false
validator.isValid(7); // false
validator.isValid(8); // true
validator.addCheck(/* add more checks */); */

import _ from 'lodash';

test('make validator', () => {
  const validator = makeValidator();
  expect(validator.isValid('some value')).toBe(true);

  validator.addCheck(_.isNumber);
  expect(validator.isValid('string')).toBe(false);

  validator.addCheck((v) => v > 5);
  expect(validator.isValid('some value')).toBe(false);
  expect(validator.isValid(6)).toBe(true);

  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(7)).toBe(false);
  expect(validator.isValid(8)).toBe(true);

  validator.addCheck((v) => v < 15);
  expect(validator.isValid(-16)).toBe(false);
  expect(validator.isValid(10)).toBe(true);
});
