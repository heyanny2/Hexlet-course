/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:

import getDomainInfo from './domain.js';
 
// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }
 
getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }
 
getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// } */ 

const getDomainInfo = (websiteName) => {
  let scheme = '';
  if (websiteName.startsWith('https://')) {
    scheme = 'https';
  } else {
    scheme = 'http';
  }
  const name = websiteName.replace(`${scheme}://`, '');

  return { scheme, name };
};

export default getDomainInfo;

//tests

const websiteName1 = {
  scheme: 'http',
  name: 'yandex.ru',
};
console.log(getDomainInfo(websiteName1));
/*{
  scheme: 'http',
  name: 'yandex.ru',
}; */

const websiteName2 = {
  scheme: 'https',
  name: 'hexlet.io',
};
console.log(getDomainInfo(websiteName1));
/* {
  scheme: 'https',
  name: 'hexlet.io',
}; */
const websiteName3 = {
  scheme: 'http',
  name: 'google.com',
};
console.log(getDomainInfo(websiteName1));
/* {
  scheme: 'http',
  name: 'google.com',
}; */
