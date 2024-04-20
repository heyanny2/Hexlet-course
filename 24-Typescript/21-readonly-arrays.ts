/*Реализуйте функцию reverse(), которая переворачивает массив чисел. 
Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке. 
Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse(). */

function reverse(coll: ReadonlyArray<number>): Array<number> {
  const init: number[] = [];

  return coll.reduceRight((acc, value) => [...acc, value], init);
}

export default reverse;
