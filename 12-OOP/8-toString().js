/*Реализуйте метод toString(), который преобразует точку к строке в соответствии с примером ниже (1, 10):

const point1 = new Point(1, 10);
 
console.log(point1.toString()); // => (1, 10)
*/

export default function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};

/*Реализуйте метод toString(), который преобразует отрезок к строке в соответствии с примером ниже:

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]
 
const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)]
*/

export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint()}, ${this.getEndPoint()}]`;
};
