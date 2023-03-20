/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход ссылку на страницу какого-то сайта, 
загружает содержимое этой страницы, извлекает из него ссылки и проверяет их доступность. Функция должна вернуть список битых ссылок.

import getBadLinks from '../checker.js';
 
const url = 'https://privet.hexlet';
const links = await getBadLinks(url);
console.log(links);
// Гипотетический пример:
// [
//   'https://privet.hexlet/somepage',
//   'https://privet.hexlet/another/page',
// ]
Проверка доступности:

Любые ссылки возвращающие коды ответа кроме 2xx (любые двухсотые) считаются битыми. 
Axios по умолчанию считает ошибочными все коды кроме 2xx и отправляет их в блок catch(). То есть если запрос axios.get() отработал без ошибок, 
то страница отдает 2xx код ответа, если завершился с ошибкой, то ответа либо нет, либо это не 2xx код. Такие ссылки считаются битыми. */

const getBadLinks = async (url) => {
  const response = await axios.get(url);
  const links = extractLinks(response.data);
  const request = (link) => axios.get(link).then(() => null).catch(() => link);
  const promises = links.map(request);
  const results = await Promise.all(promises);
  return results.filter((result) => result !== null);
};

export default getBadLinks;
