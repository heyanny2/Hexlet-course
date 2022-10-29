/* Point.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами, 
представляющими координаты на плоскости x и y и геттеры для извлечения этих свойств: getX и getY. 
На основании пройденого материала выберите тот способ организовать работу абстракции, который считаете нужным.

Segment.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint и геттеры для извлечения этих свойств: 
getBeginPoint и getEndPoint.

solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход отрезок и возвращает новый отрезок с точками, 
добавленными в обратном порядке (begin меняется местами с end).

Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка. 
То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами). 
Для создания копий используйте соответствующие конструкторы. */

//Point.js

function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

export default function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

//Segment.js
function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

//solution.js
export default (segment) => {
  const newBeginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
  const newEndPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());
  return new Segment(newBeginPoint, newEndPoint);
};

