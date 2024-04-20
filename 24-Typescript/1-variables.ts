/*Допишите тело функции repeat(), которая повторяет строку указанное количество раз. 
Функция должна возвращать полученный результат. Постарайтесь не использовать встроенные методы.

repeat('hexlet', 2); // hexlethexlet
repeat('wo', 3); // wowowo */

function repeat(text: string, count: number) {
  const resultArray = [];
  for (let i = 0; i < count; i++) {
    resultArray.push(text)
  }
  return resultArray.join('');
}

export default repeat;
