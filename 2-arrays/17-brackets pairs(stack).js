/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Скобки должны закрываться в правильном порядке. */

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];


const isBracketStructureBalanced = (coll) => {
  const stack = [];
  for (const symb of coll) {
    if (openingSymbols.includes(symb)) {
      const index = openingSymbols.indexOf(symb);
      stack.push(closingSymbols[index]);
    } else if (stack.pop() !== symb) {
      return false;
    }
  }
  return stack.length === 0;
};

export default isBracketStructureBalanced;

console.log(isBracketStructureBalanced('()'));//true
console.log(isBracketStructureBalanced('[()]'));//true
console.log(isBracketStructureBalanced('({}[])'));//true
console.log(isBracketStructureBalanced('<><<{[()]}>>)'));//true
console.log(isBracketStructureBalanced(''));//true

console.log(isBracketStructureBalanced('(('));//false
console.log(isBracketStructureBalanced('[[()]'));//false
console.log(isBracketStructureBalanced('({}}[]'));//false
console.log(isBracketStructureBalanced('(<><<{[()]}>>>)'));//false
console.log(isBracketStructureBalanced('}'));//false
console.log(isBracketStructureBalanced('([)]'));//false
console.log(isBracketStructureBalanced('([))'));//false
