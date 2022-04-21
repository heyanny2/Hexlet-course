/* Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. 
Эта функция принимает на вход две компании и возвращает true, если их структура одинаковая, и false в обратном случае. 
Проверка должна проходить по свойствам name, state, website. */

const compare = (company1, company2) => {
  const keys = Object.keys(company1);
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  } return true;
};

export default compare;

// tests

const company1 = {};
const company2 = {};
console.log(is(company1, company2));//true

const company1 = { name: 'Hexlet' };
const company2 = { name: 'Google' };
console.log(is(company1, company2));//false

const company1 = { name: 'Hexlet' };
const company2 = { name: 'Hexlet' };
console.log(is(company1, company2));//true

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://code-basics.com' };
console.log(is(company1, company2));//false

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', website: 'https://hexlet.io', state: 'published' };
console.log(is(company1, company2));//true
