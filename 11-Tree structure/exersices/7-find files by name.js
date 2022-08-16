/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, 
а возвращает список файлов, имена которых содержат эту подстроку. 
Функция должна вернуть полные пути до файлов.*/

const findFilesByName = (tree, str) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(str) ? newAncestry : [];
    }

    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };
  return iter(tree, '');
};

export default findFilesByName;

//tests

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

console.log(findFilesByName(tree, 'co'));//['/etc/nginx/nginx.conf', '/etc/consul/config.json']
console.log(findFilesByName(tree, 'toohard'));//[]
console.log(findFilesByName(tree, 'data'));//['/etc/consul/data']
