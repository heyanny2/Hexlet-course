/*Реализуйте и экспортируйте функцию-обёртку parseJson() для функции JSON.parse(), которая работает как встроенная. Но в случае если в функцию была передана некорректная json строка, функция должна выбросить исключение ParseError. Класс ParseError реализовывать не нужно, он уже импортирован.

Пример:
const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }
 
const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string */

import ParseError from './ParseError.js';

export const parseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ParseError('Invalid JSON string');
  }
};
