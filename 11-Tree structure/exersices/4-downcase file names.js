/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию (объект-дерево), 
приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру. Р
езультат в виде обработанной директории возвращается наружу.

Пример:
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
 
downcaseFileNames(tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }*/

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }
  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));
  return mkdir(name, newChildren, newMeta);
};

export default downcaseFileNames;
