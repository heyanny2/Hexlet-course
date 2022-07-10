/* Реализуйте и экспортируйте по умолчанию функцию, которая находит расстояние между двумя точками на плоскости:

Примеры
point1 = [0, 0];
point2 = [3, 4];
calculateDistance(point1, point2); // 5
*/

const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];
  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
};

export default calculateDistance;

//tests

const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2));//5

const point3 = [-1, -4];
const point4 = [-1, -10];
console.log(calculateDistance(point3, point4));//6

const point5 = [1, 10];
const point6 = [1, 3];
console.log(calculateDistance(point5, point6));//7
