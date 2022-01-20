/* Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными. 
Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

Если в первой строке больше заглавных символов, то возвращается 1.
Если во второй строке больше заглавных символов, то возвращается -1.
Иначе возвращается 0. */

const bigLettersCount = (str) => {
  let count = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      count += 1;
    }
  }
  return count;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  if (firstCount > secondCount) {
    return 1;
  } if (firstCount < secondCount) {
    return -1;
  } return 0;
};

console.log(compare('jkfsd', 'OfmPP  ld'));//-1
console.log(compare('df', 'al'));//0
console.log(compare('HHIK lk', 'dfgge'));//1
console.log(compare('srf g F', 'ddf  ff '));//0
