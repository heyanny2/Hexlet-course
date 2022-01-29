/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.

Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:

-Массив, содержащий купюры разных валют с различными номиналами
-Наименование валюты */

const getTotalAmount = (wallet, currency) => {
  let sum = 0;

  for (const bill of wallet) {
    const billCurr = bill.slice(0, 3);
    if (billCurr !== currency) {
      continue;
    }
    const value = Number(bill.slice(4));
    sum += value;
  }
  return sum;
};

export default getTotalAmount;

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
console.log(getTotalAmount(money1, 'usd'));//16

const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
console.log(getTotalAmount(money2, 'eur'));//135

const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];
console.log(getTotalAmount(money3, 'rub'));//270
