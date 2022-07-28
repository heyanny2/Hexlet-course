/* Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого всегда параллельны осям. 
Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке, достаточно знать только три параметра для однозначного задания прямоугольника на плоскости: координаты левой верхней точки, ширину и высоту. 
Зная их, мы всегда можем построить прямоугольник одним единственным способом.

Основной интерфейс:

-makeRectangle(point, width, height) (конструктор) – создает прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту. 
Ширина и высота – положительные числа.
-Селекторы getStartPoint(rectangle), getWidth(rectangle) и getHeight(rectangle)
-containsOrigin(rectangle) – проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). 
Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах (их можно высчитать в момент проверки).

Экспортируйте функции makeRectangle(point, width, height) и containsOrigin(rectangle).*/

//preset functions 

const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export {
  makeDecartPoint,
  getX,
  getY,
  getQuadrant,
};

//solution

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );
  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

export {
  makeRectangle,
  containsOrigin,
};
