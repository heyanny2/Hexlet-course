/*src/Sanitizer.js
Создайте класс Sanitizer, содержащий метод sanitize(text). Он должен отрезать концевые пробелы и возвращать результат наружу.

src/SanitizerStripTagsDecorator.js
Создайте класс (декоратор) SanitizerStripTagsDecorator. Он принимает в конструктор исходный санитайзер и дополнительно к его логике, 
выполняет очистку текста от тегов. Очистка текста от тегов должна идти раньше чем отрезание концевых пробелов.

Для очистки тегов допишите реализацию функции stripTags(tagString), которая принимает строку HTML, парсит её и возвращает текстовое содержимое.*/

//src/Sanitizer.js
class Sanitizer {
  sanitize(text) {
    return text.trim();
  }
}

export default Sanitizer;

//src/SanitizerStripTagsDecorator.js
import cheerio from 'cheerio';

const stripTags = (tagString) => {
  const $ = cheerio.load(tagString);
  return $.text();
};

class SanitizerStripTagsDecorator {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }

  sanitize(text) {
    const strippedText = stripTags(text);
    return this.sanitizer.sanitize(strippedText);
  }
}

export default SanitizerStripTagsDecorator;
