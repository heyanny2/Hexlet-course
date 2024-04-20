/*Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом. 
Эта функция считает, что массив не объект. */

function isPlainObject(value: unknown): boolean {
  return value instanceof Object && !Array.isArray(value);
}

export default isPlainObject;
