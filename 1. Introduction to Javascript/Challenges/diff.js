/* Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними. */

const diff = (a, b) => {
  if (Math.abs(a - b) <= 180) {
    return (Math.abs(a - b));
  } return (360 - Math.abs(a - b));
};
export default diff;
