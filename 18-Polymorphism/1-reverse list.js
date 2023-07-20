/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход односвязный список и переворачивает его.*/

const reverse = (list) => {
  let reversedList = null;
  let current = list;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }
  return reversedList;
};

export default reverse;

//tests

const list = new Node(true);
console.log(reverse(list));//Node { next: null, value: true }
const numbers = new Node(1, new Node(2, new Node(3)));
const reversedNumbers = reverse(numbers);
console.log(reversedNumbers.getValue());//3
console.log(reversedNumbers.getNext().getValue());//2
console.log(reversedNumbers.getNext().getNext().getValue());//1
