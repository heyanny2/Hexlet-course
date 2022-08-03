/*Реализуйте абстракцию для работы с рациональными числами, включающую в себя следующие функции:

Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь в виде объекта.
Селектор getNumer() - возвращает числитель
Селектор getDenom() - возвращает знаменатель
Сложение add() - складывает переданные дроби
Вычитание sub() - находит разность между двумя дробями
Не забудьте реализовать нормализацию дробей удобным для вас способом. 
Функция ratToString() возвращает строковое представление числа (используется для отладки)
В решении исходите из того, что в знаменателе всегда положительное число. Учитывайте знак только в числителе. */

//preset functions 
const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

//solution

const makeRational = (num, denom) => {
  const gcd = getGcd(num, denom);
  return { numer: num / gcd, denom: denom / gcd };
};

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => {
  const denom = getDenom(rat1) * getDenom(rat2);
  const numer = getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1);
  return makeRational(numer, denom);
};

const sub = (rat1, rat2) => {
  const denom = getDenom(rat1) * getDenom(rat2);
  const numer = getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1);
  return makeRational(numer, denom);
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
//tests

const rat1 = makeRational(3, 9);
console.log(getNumer(rat1));//1
console.log(getDenom(rat1));//3
const rat2 = makeRational(10, 3);
console.log(add(rat1, rat2));//makeRational(11, 3)
console.log(sub(rat1, rat2));//makeRational(-3, 1)
const rat3 = makeRational(-4, 16);
console.log(getNumer(rat3));-1
console.log(getDenom(rat3));4
const rat4 = makeRational(12, 5);
console.log(add(rat3, rat4));//makeRational(43, 20)
console.log(sub(rat3, rat4));//makeRational(-53, 20)
const rat5 = makeRational(1, 15);
const rat6 = makeRational(4, 25);
console.log(add(rat5, rat6));//makeRational(17, 75
console.log(sub(rat5, rat6));//makeRational(-7, 75)
console.log(ratToString(rat1));//1/3
console.log(ratToString(rat3));//-1/4
