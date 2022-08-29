/* Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий: added, deleted, changed или unchanged.

Возможные значения:

added — ключ отсутствовал в первом объекте, но был добавлен во второй
deleted — ключ был в первом объекте, но отсутствует во втором
changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями*/

import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!_.has(data1, key)) {
      result[key] = 'added';
    } else if (!_.has(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }
  return result;
};

export default genDiff;

console.log(genDiff({ one: 'eon' }, { two: 'own' }));//{ one: 'deleted', two: 'added' }
console.log(genDiff({ one: 'eon', two: 'two' }, { two: 'own', one: 'one' }));//{ one: 'changed', two: 'changed' }
console.log(genDiff({}, { two: 'own' }));//{ two: 'added' }
console.log(genDiff({ one: 'eon' }, {}));//{ one: 'deleted' }
console.log(genDiff({ unchanged: 'item' }, { unchanged: 'item' }));//{ unchanged: 'unchanged' }
