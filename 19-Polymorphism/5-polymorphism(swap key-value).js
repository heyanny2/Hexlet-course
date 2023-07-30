/* InMemoryKV.js
Реализуйте и экспортируйте по умолчанию класс InMemoryKV, который представляет собой in-memory key-value хранилище. 
Данные внутри него хранятся в обычном объекте. Интерфейс этого класса совпадает с FileKV за исключением конструктора. 
Конструктор InMemoryKV принимает на вход объект, который становится начальным значением базы данных.
keyValueFunctions.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход объект базы данных и меняет в нём ключи и значения местами.
swapKeyValue — полиморфная функция, она может работать с любой реализацией key-value, имеющей такой же интерфейс.
*/
//FileKV
import fs from 'fs';
import _ from 'lodash';

class FileKV {
  constructor(filePath, initial = {}) {
    this.filePath = filePath;
    Object.entries(initial)
      .forEach(([key, value]) => this.set(key, value));
  }

  set(key, value) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    const updatedData = { ...data, [key]: value };
    fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
  }

  unset(key) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    const updatedData = _.omit(data, key);
    fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
  }

  get(key, defaultValue = null) {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    return _.get(data, key, defaultValue);
  }

  toObject() {
    const content = fs.readFileSync(this.filePath);
    const data = JSON.parse(content);
    return data;
  }
}

export default FileKV;

//InMemoryKV.js
import _ from 'lodash';

class InMemoryKV {
  constructor(initialData = {}) {
    this.map = _.cloneDeep(initialData);
  }

  get(key, defaultValue = null) {
    return _.get(this.map, key, defaultValue);
  }

  set(key, newValue) {
    this.map[key] = newValue;
  }

  unset(key) {
    this.map = _.omit(this.map, key);
  }

  toObject() {
    return _.cloneDeep(this.map);
  }
}

export default InMemoryKV;

//keyValueFunctions.js
const swapKeyValue = (map) => {
  const data = map.toObject();
  const entries = Object.entries(data);
  entries.forEach(([key]) => map.unset(key));
  entries.forEach(([key, value]) => map.set(value, key));
};

export default swapKeyValue;
