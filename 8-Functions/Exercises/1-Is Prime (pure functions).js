/*Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту и печатает на экран yes или no.
Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.

Для этого выделите процесс определения того, является ли число простым, в отдельную функцию, возвращающую логическое значение. 
Это функция, с помощью которой мы отделяем чистый код от кода, интерпретирующего логическое значение (как 'yes' или 'no') 
и делающего побочный эффект (печать на экран).*/

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let div = 2; div <= (num / 2); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  const result = isPrime(num) ? 'yes' : 'no';
  console.log(result);
};

export default sayPrimeOrNot;

// tests

//'yes'
console.log(sayPrimeOrNot(2));
console.log(sayPrimeOrNot(3));
console.log(sayPrimeOrNot(19));
console.log(sayPrimeOrNot(23));
console.log(sayPrimeOrNot(47));

//'no'
console.log(sayPrimeOrNot(49));
console.log(sayPrimeOrNot(8));
console.log(sayPrimeOrNot(4));
console.log(sayPrimeOrNot(1));
console.log(sayPrimeOrNot(0));
console.log(sayPrimeOrNot(-3));
console.log(sayPrimeOrNot(9));
console.log(sayPrimeOrNot(25));
