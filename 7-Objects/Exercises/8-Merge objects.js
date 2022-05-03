/* Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. 

Параметры:
-Исходный объект
-Список ключей которые нужно заменить
-Данные, которые нужно сливать в исходный объект

В случае, когда список ключей пустой, нужно сливать все данные полностью. */

import _ from 'lodash';

const fill = (company, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(company, filteredData);
};

export default fill;

//tests

const object = {
    key: 'value',
    key2: 'value2',
};

const data = {
  key2: 'value3',
  key3: 'val',
  key4: 'boom!',
  key: 'another value',
};

console.log(fill(object, ['key2'], data));
/*{key: 'value',
  key2: 'value3',
}*/

console.log(fill(object, ['key', 'key2', 'key10'], data));
/*{key: 'another value',
    key2: 'value3',
}*/
  
console.log(fill(object, [], data));
/*{
  key2: 'value3',
  key3: 'val',
  key4: 'boom!',
  key: 'another value',
}*/
