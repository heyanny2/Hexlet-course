/* Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. 
Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:
-Имя
-Объект с дополнительными свойствами

Также у компаний есть два свойства со значениями по умолчанию:
-state – moderating
-createdAt – текущая дата 

Используйте спред-оператор для слияния данных внутри и возврата нового объекта.*/ 

const make = (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { ...defaultData, ...data, name };
};
export default make;

// tests

console.log(make('Hexlet'));
/* { 
      state: 'moderating', 
      createdAt: 1651677546622, 
      name: 'Hexlet' 
    } */
console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }));
/*{
      state: 'published',
      createdAt: 1651677546646,
      website: 'hexlet.io',
      name: 'Hexlet'
    }*/
