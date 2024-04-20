/*Реализуйте функцию lastIndex(str, char), возвращающую индекс последнего вхождения символа в строку или null, если такого символа нет. */

function lastIndex(str: string, char: string): number | null {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}

export default lastIndex;
