/* Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет (или добавляет) значение по указанному пути. 
Функция мутирует объект.

const object = { a: [{ b: { c: 3 } }] };
 
set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4
 
set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
*/

let data;

beforeEach(() => {
  data = {
    one: [{ two: { three: 3 } }],
  };
});

test('changing value', () => {
  expect(set(data, 'one[0].two.three', 4)).toEqual({
    one: [{ two: { three: 4 } }],
  });
});

test('adding key', () => {
  expect(set(data, 'one[0].two.four', 4)).toEqual({
    one: [{ two: { three: 3, four: 4 } }],
  });
});

test('adding object', () => {
  expect(set(data, 'five', 5)).toEqual({
    one: [{ two: { three: 3 } }],
    five: 5,
  });
});
