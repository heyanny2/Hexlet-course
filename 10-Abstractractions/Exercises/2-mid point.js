/* Реализуйте и экспортируйте по умолчанию функцию, которая находит точку посередине между двумя указанными точками.

Примеры
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
console.log(point3); // => { x: 2, y: 2 }; */

const getMidPoint = (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;
  return { x, y };
};

export default getMidPoint;

//tests
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
console.log(getMidPoint(point1, point2));//{ x: 2, y: 2 }

const point3 = { x: -1, y: 10 };
const point4 = { x: 0, y: -3 };
console.log(getMidPoint(point3, point4));//{ x: -0.5, y: 3.5 }
