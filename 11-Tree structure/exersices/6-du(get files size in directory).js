/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию и возвращает список вложенных узлов (директорий и файлов) 
в указанную директорию на один уровень, а так же место, которое они занимают. Размер файла задается в метаданных. 
Размер директории складывается из сумм всех размеров файлов, находящихся внутри во всех поддиректориях. 
Сами директории размера не имеют. 
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
du(tree);
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ] */

const getFilesSize = (node) => {
  if (isFile(node)) {
    const meta = getMeta(node);
    return meta.size;
  }

  const children = getChildren(node);
  const sizes = children.map(getFilesSize);
  return _.sum(sizes);
};
const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), getFilesSize(child)]);
  return result.sort(([, size1], [, size2]) => size2 - size1);
};

export default du;
