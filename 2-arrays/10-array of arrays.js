/* Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, проводившихся между командами СССР и Канады в 72 (первая суперсерия) и в 74 годах (вторая суперсерия). 
В этом задании вам предстоит написать функцию, которая вычисляет команду, выигравшую суперсерию.

superseries.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии. 
Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии. 
Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре (сколько шайб забила Канада и СССР). 
Результат функции – название страны: 'canada', 'ussr'. Если суперсерия закончилась в ничью, то нужно вернуть null. */

const getSuperSeriesWinner = (scores) => {
  let result = 0;
  for (const row of scores) {
    result += Math.sign(row[0] - row[1]);
  }
  if (result === 0) {
    return null;
  }
  return result > 0 ? 'canada' : 'ussr';
};

export default getSuperSeriesWinner;

const superSeries1 = [
  [3, 7],
  [4, 1],
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];
console.log(getSuperSeriesWinner(superSeries1));//'canada'

const superSeries2 = [
  [3, 3],
  [4, 1],
  [5, 8],
  [5, 5],
  [2, 3],
  [2, 5],
  [4, 4],
  [2, 3],
];
console.log(getSuperSeriesWinner(superSeries2));//'ussr'

const superSeries3 = [
  [3, 2],
  [4, 1],
  [5, 8],
  [5, 5],
  [2, 2],
  [2, 4],
  [4, 2],
  [2, 4],
];
console.log(getSuperSeriesWinner(superSeries3));//'null'

const superSeries4 = [
  [3, 3],
  [4, 1],
  [5, 8],
  [5, 5],
  [2, 3],
  [2, 5],
  [4, 4],
  [4, 3],
];
console.log(getSuperSeriesWinner(superSeries4));//'ussr'
