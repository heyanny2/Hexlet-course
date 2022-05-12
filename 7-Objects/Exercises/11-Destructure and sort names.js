/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей, 
извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.
Используйте деструктуризацию для извлечения имени прямо в цикле.*/

const getSortedNames = (users) => {
  const result = [];
  for (const { name } of users) {
    result.push(name);
  }
  return result.sort();
};

export default getSortedNames;

//tests

const users1 = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];
console.log(getSortedNames(users1));//[ 'Bronn', 'Eiegon', 'Reigar', 'Sansa' ]

const users2 = [
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];
console.log(getSortedNames(users2));//[ 'Edd', 'Joffrey', 'Jon', 'Rick', 'Robb', 'Tisha' ]
