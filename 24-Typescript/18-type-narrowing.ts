/*Реализуйте функцию last(), которая извлекает последний элемент из переданного значения. 
Значением может быть строка или число. 
Функция возвращает значение того же типа, которое было передано в качестве параметра */

function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return value % 10;
  }

  return value[value.length - 1] ?? '';
}

export default last;
