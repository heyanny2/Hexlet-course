/*Реализуйте и экспортируйте по умолчанию функцию, которая сортирует массив используя пузырьковую сортировку. */

const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped);
  return coll;
};

export default bubbleSort;

console.log(bubbleSort([]));//[]
console.log(bubbleSort([10, 1, 3]));//[1, 3, 10]
console.log(bubbleSort([0, 4, 0, 10, -3]));//[-3, 0, 0, 4, 10]
