/*src/File.js
Создайте класс File, который представляет собой абстракцию над файлом (обёртка над синхронными функциями модуля fs). 
Реализуйте в этом классе метод read(). Этот метод проверяет можно ли прочитать файл и если да, то читает его, если нет, 
то бросает исключения двух видов:

Если файла не существует – NotExistsError
Если файл нельзя прочитать, но он существует – NotReadableError

src/errors/FileError.js
Реализуйте класс FileError, который наследуется от Error. Это базовое исключение для данной библиотеки.

src/errors/NotReadableError.js, src/errors/NotExistsError.js
Реализуйте классы исключения. Они должны наследоваться от базового класса исключений для данной библиотеки.

src/Utils.js
Реализуйте функцию readFiles, которая принимает на вход список файлов и возвращает их содержимое. 
Если в процессе обработки какого-то файла возникло исключение, то вместо данных этого файла возвращается null.*/

//src/File.js
import fs from 'fs';
import NotExistsError from './errors/NotExistsError.js';
import NotReadableError from './errors/NotReadableError.js';

class File {
  constructor(filepath) {
    this.filepath = filepath;
  }

  read() {
    try {
      return fs.readFileSync(this.filepath);
    } catch (e) {
      if (!fs.existsSync(this.filepath)) {
        throw new NotExistsError(`${this.filepath} does not exist`);
      } else if (!fs.accessSync(this.filepath)) {
        throw new NotReadableError(`${this.filepath} is not readable`);
      }
    }
    return fs.readFileSync(this.filepath);
  }
}

export default File;

//src/Utils.js
import File from './File.js';

export const readFiles = (filepaths) => {
  const values = filepaths
    .map((filepath) => {
      try {
        const file = new File(filepath);
        return file.read();
      } catch (e) {
        return null;
      }
    });
  return values;
};

//src/errors/FileError.js
class FileError extends Error {
  constructor(message) {
    super(message);
    this.name = 'File error';
  }
}

export default FileError;

//src/errors/NotExistsError.js
import FileError from './FileError';

class NotExistsError extends FileError {}

export default NotExistsError;

//src/errors/NotReadableError.js
import FileError from './FileError';

class NotReadableError extends FileError {}

export default NotReadableError;
