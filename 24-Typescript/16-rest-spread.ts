/*Определите функцию max(), которая отличается от примера из урока только тем, что у нее первый параметр обязательный.*/

function max(first: number, ...rest: number[]): number {
  return Math.max(first, ...rest);
}

export default max;
