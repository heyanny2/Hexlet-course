/*Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк на английском языке. 
Каждая из дат представлена массивом [2001, 10, 18], в котором первый элемент — это год, второй — месяц, и третий — число. 
Функция на вход должна принимать любое количество параметров. 
Если в функцию ничего не было передано, она должна вернуть пустой массив. 
Экспортируйте функцию по умолчанию. */

const convert = (...coll) => {
  const formattedDates = [];

  for (const item of coll) {
    const formattedDate = new Date(...item).toDateString();
    formattedDates.push(formattedDate);
  }

  return formattedDates;
};

export default convert;

//tests

const item1 = [];
console.log(convert(item1));//[]

const item2 = [1993, 3, 24];
console.log(convert(item2));//['Sat Apr 24 1993']

const item3 = [
  [1993, 3, 24],
  [1997, 8, 12],
  [2001, 10, 18],
];
console.log(convert(item3));
/* [
    'Sat Apr 24 1993',
    'Fri Sep 12 1997',
    'Sun Nov 18 2001',
  ]; */

const item4 = [
  [1982, 12, 11],
  [1996, 5, 28],
  [2005, 1, 1],
  [2000, 12, 12],
  [1994, 7, 31],
];
console.log(convert(item4));
/* [
    'Tue Jan 11 1983',
    'Fri Jun 28 1996',
    'Tue Feb 01 2005',
    'Fri Jan 12 2001',
    'Wed Aug 31 1994',
  ]; */
