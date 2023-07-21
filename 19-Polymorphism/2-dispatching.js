/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список тегов, 
находит среди них теги a, link и img, а затем извлекает ссылки и возвращает список ссылок. 
Теги подаются на вход в виде массива, где каждый элемент это тег. Тег имеет следующую структуру:

name — имя тега.
href или src — атрибуты. Атрибуты зависят от тега: тег img имеет атрибут src, тег a — href, link — href.*/

const mapping = {
  a: 'href',
  img: 'src',
  link: 'href',
};

const getLinks = (tags) => {
  const filteredTags = tags.filter((tag) => Object.hasOwn(mapping, tag.name));
  return filteredTags.map((tag) => tag[mapping[tag.name]]);
};

export default getLinks;

//tests

const tags1 = [];
console.log(getLinks(tags1));//[]

const tags2 = [
      { name: 'p' },
      { name: 'a', href: 'hexlet.io' },
      { name: 'img', src: 'hexlet.io/assets/logo.png' },
];
console.log(getLinks(tags2));/*[
      'hexlet.io',
      'hexlet.io/assets/logo.png',
];*/

const tag3 = [
      { name: 'img', src: 'hexlet.io/assets/logo.png' },
      { name: 'div' },
      { name: 'link', href: 'hexlet.io/assets/style.css' },
      { name: 'h1' },
];
console.log(getLinks(tags3));/*[
      'hexlet.io/assets/logo.png',
      'hexlet.io/assets/style.css',
];*/

const tags4 = [
      { name: 'invalidTag', src: 'hexlet.io/assets/invalid.png' },
      { name: 'img', src: 'hexlet.io/assets/logo.png' },
      { name: 'div' },
      { name: 'link', href: 'hexlet.io/assets/style.css' },
      { name: 'h1' },
];
console.log(getLinks(tags4));/*[
      'hexlet.io/assets/logo.png',
      'hexlet.io/assets/style.css',
];*/
