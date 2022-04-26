/* Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства. 
Параметры:
- Исходный объект
- Массив имен свойств */

const pick = (data, expectedKey) => {
  const result = {};
  const keys = Object.keys(data);
  for (const key of expectedKey) {
    if (keys.includes(key)) {
      result[key] = data[key];
    }
  }
  return result;
};

export default pick;

//tests

const data1 = {};
console.log(pick(data1, []));//{}
console.log(pick(data1, ['undefined', 'another']));//{}

const data2 = {
  user: 'ubuntu',
  os: 'linux',
};
console.log(pick(data2, ['none']));//{}
console.log(pick(data2, ['user']));//{ user: 'ubuntu' }
console.log(pick(data2, ['os', 'user']));//{ os: 'linux', user: 'ubuntu' }

const data3 = {
  user: 'ubuntu',
  os: 'linux',
  virtual: false,
};
console.log(pick(data3, ['virtual']));//{ virtual: false }
console.log(pick(data3, ['os', 'user', 'virtual']));//{ os: 'linux', user: 'ubuntu', virtual: false }
