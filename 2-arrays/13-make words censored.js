/* Реализуйте и экспортируйте по умолчанию функцию, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. 

Аргументы:
Текст
Набор стоп слов

Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов). */

const makeCensored = (sentence, stopWord) => {
  const separator = ' ';
  const words = sentence.split(separator);
  const wordsColl = [];
  for (const word of words) {
    const newWord = stopWord.includes(word) ? '$#%!' : word;
    wordsColl.push(newWord);
  }
  return wordsColl.join(separator);
};

export default makeCensored;

const sentence1 = 'When you play the game of thrones, you win or you die';
console.log(makeCensored(sentence1, ['die']));//'When you play the game of thrones, you win or you $#%!'

const sentence2 = 'chicken chicken? chicken! chicken';
console.log(makeCensored(sentence2, ['chicken']));//'$#%! chicken? chicken! $#%!'

const sentence3 = 'chicken chicken? chicken! ? chicken';
console.log(makeCensored(sentence3, ['?', 'chicken']));//'$#%! chicken? chicken! $#%! $#%!'

const sentence4 = 'chicken chicken? chicken! ? ! @ chicken';
console.log(makeCensored(sentence4, ['?', '!', '@', 'chicken']));//'$#%! chicken? chicken! $#%! $#%! $#%! $#%!'
