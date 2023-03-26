/*Мы будем парсить страницу категории статей. Эта страница содержит заголовок категории, его описание и ссылки на статьи с небольшим описанием. 
Эта структура фиксирована, меняется только количество статей от категории к категории.

src/extractor.js
Реализуйте логику функции, которая принимает на вход document, извлекает из него данные и возвращает объект нужной структуры.

<div class="content">
  <h1>Category Name</h1>
  <div class="description">Category Description</div>
  <div class="links">
    <div>
      <h2><a href="#">Article Name 1</a></h2>
      <p>Article Description 1</p>
    </div>
    <div>
      <h2><a href="#">Article Name 2</a></h2>
      <p>Article Description 2</p>
    </div>
  </div>
</div>
В примере выше "Category Name" - это заголовок категории, "Category Description" - описание категории и две статьи: 
"Article Name 1" с описанием "Article Description 1" и "Article Name 2" с описанием "Article Description 2".

Нужно сформировать объект, в котором статья описывается следующими свойствами:

title - заголовок категории
description - описание категории
items - статьи
Структура каждой статьи определяется объектом со свойствами:

title - заголовок статьи (берётся из ссылки статьи)
description - описание статьи
import extractData from './extractor.js';
 
const data = extractData(document);
console.log(data);
// {
//   title: 'Category Name',
//   description: 'Category Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }
src/index.js
Проверьте как работает вновь созданная функция на странице доступной в веб-доступе. Импортируйте функцию в index.js, 
выполните ее с аргументом document и распечатайте результат в консоль. Проверьте что в консоль вывелись нужные данные. */

//extractor.js
export default (document) => {
  const root = document.querySelector('.content');
  const categoryTitleElement = root.querySelector('h1');
  const categoryTitle = categoryTitleElement.innerHTML;
  const categoryDescriptionElement = root.querySelector('.description');
  const categoryDescription = categoryDescriptionElement.innerHTML;

  const articlesElements = root.querySelectorAll('.links div');
  const items = Array.from(articlesElements).map((item) => {
    const articleTitleElement = item.querySelector('a');
    const articleDescriptionElement = item.querySelector('p');
    return {
      title: articleTitleElement.innerHTML,
      description: articleDescriptionElement.innerHTML,
    };
  });
  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
};
//index.js
import extractData from './extractor.js';

const data = extractData(document);
console.log(data);
