/*Создайте и экспортируйте тип Point, который описывает точку в пространстве, состоящую из трех координат: x, y, z.

Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение.
Две точки совпадают, если совпадают все их координаты */

export type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  return p1.every((el, i) => el === p2[i]);
}

export default isTheSamePoint;
