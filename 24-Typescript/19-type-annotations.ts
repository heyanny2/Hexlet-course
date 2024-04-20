/*Реализуйте функцию unique(), которая убирает дубликаты из массива. Функция принимает на вход массив чисел и строк. 
Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента. 
Порядок значений результата определяется порядком их появления в массиве.*/

function unique(coll: (number | string)[]): (number | string)[] {
  const init: (number | string)[] = [];

  return coll.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    init,
  );
}

export default unique;
