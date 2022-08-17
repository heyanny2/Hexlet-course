/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход html-дерево и заменяет во всех узлах имя класса, 
имена классов передаются через параметры. 
Функция не должна мутировать исходное дерево.
Пример:
const tree = {
  name: 'div',
  type: 'tag-internal',
  className: 'hexlet-community',
  children: [
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
  ],
};
 
const result = changeClass(tree, 'old-class', 'new-class');
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }*/

const changeClass = (tree, classNameFrom, classNameTo) => {
  const iter = (node) => {
    const updatedNode = { ...node };

    if (_.has(node, 'className')) {
      const newClassName = classNameFrom === node.className ? classNameTo : node.className;
      updatedNode.className = newClassName;
    }

    if (node.type === 'tag-internal') {
      const newChildren = node.children.map(iter);
      updatedNode.children = newChildren;
    }
    return updatedNode;
  };
  return iter(tree);
};

export default changeClass;
