/* Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству. 
Функция принимает аргументами массив объектов и название свойства для группировки. 
Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.*/

const groupBy = (objects, key) => objects.reduce((acc, object) => {
  const groupName = object[key];
  const group = acc[groupName] ?? [];
  return { ...acc, [groupName]: group.concat(object) };
}, {});

export default groupBy;

//tests

const students = [
  { name: 'Tirion', class: 'B', mark: 2 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
  { name: 'Bronn', class: 'B', mark: 3 },
  { name: 'Sam', class: 'A', mark: 2 },
  { name: 'Aria', class: 'B', mark: 5 },
  { name: 'Keit', class: 'B', mark: 4 },
  { name: 'Rob', class: 'B', mark: 4 },
  { name: 'Taywin', class: 'A', mark: 5 },
];

console.log(groupBy([], ''));//{}
console.log(groupBy([], 'class'));//{}
console.log(groupBy(students, 'class'));
/* {
  B: [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
  ],
  A: [
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Taywin', class: 'A', mark: 5 },
  ],
  };*/
console.log(groupBy(students, 'mark'));
/*{
  2: [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Sam', class: 'A', mark: 2 },
  ],
  3: [
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Bronn', class: 'B', mark: 3 },
  ],
  4: [
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
  ],
  5: [
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Taywin', class: 'A', mark: 5 },
  ],
};*/
console.log(groupBy(students, 'name'));
/*{
  Tirion: [
    { name: 'Tirion', class: 'B', mark: 2 },
  ],
  Keit: [
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Keit', class: 'B', mark: 4 },
  ],
  Ramsey: [
    { name: 'Ramsey', class: 'A', mark: 4 },
  ],
  Bronn: [
    { name: 'Bronn', class: 'B', mark: 3 },
  ],
  Sam: [
    { name: 'Sam', class: 'A', mark: 2 },
  ],
  Aria: [
    { name: 'Aria', class: 'B', mark: 5 },
  ],
  Rob: [
    { name: 'Rob', class: 'B', mark: 4 },
  ],
  Taywin: [
    { name: 'Taywin', class: 'A', mark: 5 },
  ],
};*/
