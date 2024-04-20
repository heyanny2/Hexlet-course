/*Реализуйте функцию getParams(), которая принимает на вход строку запроса (query string) и возвращает параметры в виде объекта:

getParams('per=10&page=5');
// { per: '10', page: '5' }
getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' } */

function getParams(query: string) {
  const parts = query.split('&');
  const init: any = {};
  const result = parts.reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, init);

  return result;
}

export default getParams;
