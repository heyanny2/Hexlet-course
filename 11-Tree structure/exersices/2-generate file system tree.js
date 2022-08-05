/* Реализуйте и экспортируйте по умолчанию функцию, которая создает такую файловую систему(порядок элементов важен):

nodejs-package # directory (meta: { hidden: true })
├── Makefile # file
├── README.md # file
├── dist # empty directory
├── __tests__ # directory
│   └── half.test.js # file (meta: { type: 'text/javascript' })
├── babel.config.js # file (meta: { type: 'text/javascript' })
└── node_modules # directory (meta: { owner: 'root', hidden: false })
    └── @babel # directory
        └── cli # directory
            └── LICENSE # file */

import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const generate = () => {
  const tree = mkdir('nodejs-package', [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist'),
    mkdir('__tests__', [
      mkfile('half.test.js', { type: 'text/javascript' }),
    ]),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir('node_modules', [
      mkdir('@babel', [
        mkdir('cli', [
          mkfile('LICENSE'),
        ]),
      ]),
    ], { owner: 'root', hidden: false }),
  ],
  { hidden: true },
  );
  return tree;
};

export default generate;
