/*Протестируйте функцию getFilesCount(path, log), которая считает количество всех файлов в указанной директории и всех поддиректориях. 
В отличие от предыдущей версии задания, здесь нас интересует только то, что эта функция выполняет логирование. 
Мы хотим убедиться, что она один раз отправляет сообщение c текстом 'Go!' в лог. 
Для этого придётся воспользоваться моком.*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('logging something', async () => {
  const callback = jest.fn();
  const dirPath = getFixturePath('nested');
  getFilesCount(dirPath, callback);

  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith('Go!');
});
