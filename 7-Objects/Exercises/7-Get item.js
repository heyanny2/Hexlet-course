/* Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

-Исходный объект
-Цепочка ключей (массив), по которой ведётся поиск значения

В случае, когда добраться до значения невозможно, возвращается null. 

В этой задаче нельзя использовать библиотеку lodash. Смысл задачи в том, чтобы реализовать всё самостоятельно.*/

const get = (obj, keys) => {
  let value = obj;
  for (const key of keys) {
    const hasProperty = Object.hasOwn(value, key);
    if (!hasProperty) {
      return null;
    }
    value = value[key];
  }
  return value;
};

export default get;

//tests

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

console.log(get(data, [null]));//null
console.log(get(data, ['undefined']));//null
console.log(get(data, ['user']));//ubuntu
console.log(get(data, ['user', 'ubuntu']));//null
console.log(get(data, ['hosts', 1, 'name']));//web2
console.log(get(data, ['hosts', 5]));//null
console.log(get(data, ['hosts', 0]));//{ name: 'web1' }
console.log(get(data, ['hosts', 1, null]));//3
console.log(get(data, ['user', 'name', 'name']));//null
console.log(get(data, ['hosts', 1, 'active']));//false
