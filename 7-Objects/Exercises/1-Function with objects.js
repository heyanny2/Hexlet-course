/* Реализуйте и экспортируйте по умолчанию функцию, которая возвращает объект, соответствующий JSON из файла example.json в этом упражнении. 
Всё, что вам нужно сделать — посмотреть на содержимое example.json и руками сформировать объект аналогичной структуры.

{
  "files": [
    "src/objects.js"
  ],
  "config": true
} 

*/

export default () => {
  const object = {
    files: ['src/objects.js'],
    config: true,
  };
  return object;
};
