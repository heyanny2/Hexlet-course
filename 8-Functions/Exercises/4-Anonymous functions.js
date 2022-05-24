/* Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. 
Количество символов передаётся в takeLast() вторым параметром. 
Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null. */
//ver1
const run = (text) => {
  const takeLast = (str, length) => {
    if (str.length < length || str.length === 0) {
      return null;
    }
    let i = str.length - 1;
    let result = '';

    while (i >= (str.length - length)) {
      result = `${result}${str[i]}`;
      i -= 1;
    }
    return result;
  };
  return takeLast(text, 4);
};

export default run;

//ver2
const run = (text) => {
  const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const result = [];
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }

    return result.join('');
  };
return takeLast(text, 4);
};

//tests 

console.log(run(''));//null
console.log(run('cb'));//null
console.log(run('power'));//rewo
console.log(run('kids'));//sdik
console.log(run('hexlet'));//telx
