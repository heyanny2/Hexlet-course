/* Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. 
При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

Пример использования
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
 
buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>'; */

const buildDefinitionList = (coll) => {
  if (coll.length === 0) {
    return '';
  }
  const definitions = [];
  for (const def of coll) {
    definitions.push(`<dt>${def[0]}</dt><dd>${def[1]}</dd>`);
  }
  const innerValue = definitions.join('');
  const result = `<dl>${innerValue}</dl>`;
  return result;
};

export default buildDefinitionList;

const definitions1 = [
  ['key', 'value'],
  ['key2', 'value2'],
];
console.log(buildDefinitionList(definitions1));//'<dl><dt>key</dt><dd>value</dd><dt>key2</dt><dd>value2</dd></dl>'

const definitions2 = [];
console.log(buildDefinitionList(definitions2));//''
