/*В этом задании вам придется написать код, который нарушает принцип Лисков. 

Представьте себе библиотеку, которая предоставляет абстракции для работы с хранилищами ключ-значение. 
Все они предоставляют интерфейс из трех методов:

set(key, value) – устанавливает значение
get(key) – возвращает значение
count() – возвращает количество ключей в хранилище
В директории src три таких хранилища: Redis, InMemory, GoogleStorage. Первые два умеют возвращать число ключей внутри них, а последнее – нет.

Для простоты реализации, каждое хранилище складывает значения во внутренний объект. 

src/GoogleStorage.js
Реализуйте интерфейс хранилища в классе GoogleStorage.

Так как GoogleStorage не поддерживает подсчет количества элементов, то сделайте так, чтобы этот метод кидал исключение Error, если его вызывают.*/

//src/Redis.js
export default class Redis {
  constructor() {
    this.elements = new Map();
  }

  get(key) {
    if (!this.elements.has(key)) {
      throw new Error(`Not found key "${key}"`);
    }
    return this.elements.get(key);
  }

  set(key, value) {
    this.elements.set(key, value);
  }

  count() {
    return this.elements.size;
  }
}

//src/InMemory.js
export default class InMemory {
  constructor(elements = {}) {
    this.elements = elements;
  }

  get(key) {
    return this.elements[key];
  }

  set(key, value) {
    this.elements[key] = value;
  }

  count() {
    return Object.keys(this.elements).length;
  }
}

//src/GoogleStorage.js
class GoogleStorage {
  constructor(elements = {}) {
    this.elements = elements;
  }

  get(key) {
    return this.elements[key];
  }

  set(key, value) {
    this.elements[key] = value;
  }

  count() {
    throw new Error('Error');
  }
}

export default GoogleStorage;
