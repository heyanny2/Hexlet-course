/*Реализуйте класс PasswordGeneratorAdapter, который представляет собой адаптер к пакету generate-password.
В текущем задании, есть код, отвечающий за генерацию паролей. Он находится в классе PasswordBuilder. 
Для генерации паролей, этот класс использует внешний объект.

Суть данного задания — внедрить в эту систему внешнюю библиотеку.

Обратите внимание на то, что задача решается не через исправление кода самой библиотеки, а за счет создания адаптера, 
благодаря которому соединяется код задания и код библиотеки.

Вторым параметром в buildPassword передается набор опций:
uppercase
numbers
symbols
Каждая из этих опций соответствует опциям внутри библиотеки generate-password.
Значение по умолчанию для данных опций должно быть false.
*/

//PasswordBuilder.js
export default class PasswordBuilder {
  constructor(passwordGenerator) {
    this.passwordGenerator = passwordGenerator;
  }

  buildPassword(length = 8, options = ['numbers', 'symbols']) {
    const password = this.passwordGenerator.generatePassword(length, options);
    const digest = crypto.createHash('sha1').update(password).digest('hex');

    return { password, digest };
  }
}

//PasswordGeneratorAdapter.js
export default class PasswordGeneratorAdapter {
  generatePassword(length, options) {
    const defaultParams = {
      uppercase: false,
      numbers: false,
      symbols: false,
      length,
    };
    options.forEach((opt) => (defaultParams[opt] = true));
    return generator.generate(defaultParams);
  }
}
