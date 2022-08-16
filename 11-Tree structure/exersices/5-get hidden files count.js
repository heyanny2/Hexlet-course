/*Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых файлов в директории и всех поддиректориях. 
Скрытым файлом в Linux системах считается файл, название которого начинается с точки.*/

const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  if (isFile(tree)) {
    return name.startsWith('.') ? 1 : 0;
  }
  const children = getChildren(tree);
  const descendantCounts = children.map(getHiddenFilesCount);
  return _.sum(descendantCounts);
};

export default getHiddenFilesCount;

//tests

const tree1 = mkdir('/', [
    mkdir('etc', [
      mkdir('apache'),
      mkdir('nginx', [
        mkfile('.nginx.conf', { size: 800 }),
      ]),
      mkdir('.consul', [
        mkfile('.config.json', { size: 1200 }),
        mkfile('data', { size: 8200 }),
        mkfile('raft', { size: 80 }),
      ]),
    ]),
    mkfile('.hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);

console.log(getHiddenFilesCount(tree1));//3

const tree2 = mkdir('/', [
    mkdir('.etc', [
      mkdir('.apache'),
      mkdir('nginx', [
        mkfile('.nginx.conf', { size: 800 }),
      ]),
    ]),
    mkdir('.consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('.raft', { size: 80 }),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);

console.log(getHiddenFilesCount(tree1));//2
