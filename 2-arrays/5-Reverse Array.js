/* Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке.
Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse(). */

export const reverse = (arr) => {
  for (let i = 0; i < arr.length / 2; i += 1) {
    const newArr = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = newArr;
  }
  return arr;
};

const names1 = ['john', 'smith', 'karl'];
console.log(reverse(names1));//['karl', 'smith', 'john']

const names2 = [];
console.log(reverse(names2));//[]

const names3 = ['one', 'two'];
console.log(reverse(names3));//['two', 'one']

const names4 = ['john', 'smith', 'karl', 'alan', 'joe'];
console.log(reverse(names4));//['joe', 'alan', 'karl', 'smith', 'john']
