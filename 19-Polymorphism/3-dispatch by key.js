/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход тег и возвращает его текстовое представление.

const hrTag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
const html = stringify(hrTag); // <hr class="px-3" id="myid">

В структуре тега есть три специальных ключа:

name — имя тега.
tagType — тип тега, определяет его парность (pair) или одиночность (single).
body — тело тега, используется для парных тегов. Если у парного тега нет содержимого, то body равно пустой строке ''.
*/

const excludedAttributes = ['name', 'tagType', 'body'];

const buildAttributes = (tag) => (
  Object.keys(tag)
    .filter((attribute) => !excludedAttributes.includes(attribute))
    .map((attribute) => ` ${attribute}="${tag[attribute]}"`)
    .join('')
);

const mapping = {
  single: (tag) => `<${tag.name}${buildAttributes(tag)}>`,
  pair: (tag) => `<${tag.name}${buildAttributes(tag)}>${tag.body}</${tag.name}>`,
};
const stringify = (tag) => {
  const build = mapping[tag.tagType];
  return build(tag);
};

export default stringify;

//tests
const tag1 = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
console.log(stringify(tag1));//'<hr class="px-3" id="myid">'
const tag2 = {
  name: 'p',
  tagType: 'pair',
  body: 'text',
};
console.log(stringify(tag2));//'<p>text</p>'
const tag3 = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
console.log(stringify(tag3));//'<div id="wow">text2</div>'
const tag4 = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
  [randomAttr]: 'value',
    };
console.log(stringify(tag4));//`<div id="wow" ${randomAttr}="value">text2</div>`
