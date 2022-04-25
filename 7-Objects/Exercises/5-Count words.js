/* words.js
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении, и возвращает объект. 
В объекте свойства — это слова (приведенные к нижнему регистру), а значения — это то, сколько раз слово встретилось в предложении. 
Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.*/

import _ from 'lodash';
//first solution

const countWords = (sentence) => {
  const normalized = sentence.toLowerCase();
  const arr = _.words(normalized);
  const result = {};
  for (const word of arr) {
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result;
};

export default countWords;

// second solution
const countWords = (sentence) => {
  const normalized = sentence.toLowerCase();
  const arr = _.words(normalized);
  const result = {};
  for (const word of arr) {
    result[word] = (result[word] ?? 0) + 1;
  }
  return result;
};

export default countWords;

// tests

const sentence1 = '';
console.log(countWords(sentence1));//{}

const sentence2 = 'one two three two ONE one wow';
console.log(countWords(sentence2));
/* {
    one: 3,
    two: 2,
    three: 1,
    wow: 1,
  }; */

const sentence3 = 'another one sentence with strange Words words';
console.log(countWords(sentence3));
/* {
    another: 1,
    one: 1,
    sentence: 1,
    with: 1,
    strange: 1,
    words: 2,
  }; */

