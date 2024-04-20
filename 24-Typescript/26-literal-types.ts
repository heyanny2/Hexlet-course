/*Реализуйте функцию makeTurn(), принимающую строку left или right и перемещающую черепашку вперед-назад по одномерной карте длиной пять.
Если ход невозможен, должно выброситься исключение. */

const makeTurn = (direction: 'left' | 'right'): void => {
  const turtleIndex = state.indexOf('turtle');
  const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;

  if (nextIndex < 0 || nextIndex >= state.length) {
    throw new Error('Out of bounds');
  }

  state[turtleIndex] = null;
  state[nextIndex] = 'turtle';
};

export default startGame;
