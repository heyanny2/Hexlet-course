/* Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов. 
Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. 
Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.*/

import _ from 'lodash';

const cloneDeep = (data) => {
  const result = {};
  const keys = Object.keys(data);

  for (const key of keys) {
    const value = data[key];
    result[key] = _.isObject(value) ? cloneDeep(value) : value;
  }
  return result;
};

export default cloneDeep;

//tests

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};
console.log(cloneDeep(data));
/*  {
      key: 'value',
      key2: { 
        key: 'innerValue', 
          innerKey: { 
            anotherKey: 'anotherValue',
          } 
      }
    }
*/
