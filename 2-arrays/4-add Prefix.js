/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс, и возвращает новый массив, 
в котором к каждому элементу исходного массива добавляется переданный префикс. 
Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел. */

const addPrefix = (names, prefix) => {
  const newNames = [];
  for (let i = 0; i < names.length; i += 1) {
    newNames.push(`${prefix} ${names[i]}`);
  }
  return newNames;
};

export default addPrefix;

const names = ['john', 'smith', 'karl'];
console.log(addPrefix(names, 'Mr'));//[ 'Mr john', 'Mr smith', 'Mr karl' ]
console.log(addPrefix(names, 'Mrs'));//[ 'Mrs john', 'Mrs smith', 'Mrs karl' ]
