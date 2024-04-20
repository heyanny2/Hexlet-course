/*Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов.
Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null. 
В ячейке может находиться символ x или o.*/

function getField(size: number): (('x' | 'o') | null)[][] {
  const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
  return field;
}

export default getField;
