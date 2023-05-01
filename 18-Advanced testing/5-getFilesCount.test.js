/*Протестируйте функцию getFilesCount(), которая считает количество всех файлов в указанной директории и всех поддиректориях.

const filesCount = getFilesCount('/path/to/directory');
У этой функции есть дополнительное поведение. Во время обхода файлов, 
она записывает информацию об этом (какие файлы были задействованы) в специальный файл, который называется журналом действий или логом.*/

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('flat and nested', () => {
  const dirPath = getFixturePath('nested');
  const count = getFilesCount(dirPath, () => {});
  expect(count).toEqual(4);
});
