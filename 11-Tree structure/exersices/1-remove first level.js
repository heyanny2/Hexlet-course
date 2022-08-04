/* removeFirstLevel.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое, элементами которого являются дети вложенных узлов*/

const removeFirstLevel = (tree) => {
  const nodes = tree.filter(Array.isArray);
  return nodes.flat();
};

export default removeFirstLevel;
//tests

const tree1 = []
console.log(removeFirstLevel(tree1));//[]
const tree2 = [1, 100, 3]
console.log(removeFirstLevel(tree2));//[]
const tree3 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
console.log(removeFirstLevel(tree3));//[1, [3, 2], 3, 5]
