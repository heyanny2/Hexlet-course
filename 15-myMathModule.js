/* В файле myMathModule.js:

1.Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

2.Экспортируйте функцию.

solution.js
В файле solution.js:

1.Импортируйте функцию getTriangleArea() из модуля myMathModule.
2.Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square() (принимает число и возвращает его квадрат).
3.Экспортируйте созданную функцию по умолчанию. */

import square from './square.js';
import { getTriangleArea } from './myMathModule.js';

const triangleArea = (n) => getTriangleArea(n, square(n) / 2);
export default triangleArea;
