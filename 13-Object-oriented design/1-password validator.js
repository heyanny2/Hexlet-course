/* Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.

Этот валидатор поддерживает следующие опции:

minLength (по умолчанию 8) - минимальная длина пароля
containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
Опции передаются одним объектом в конструктор валидатора.

const validator = new PasswordValidator({ containNumbers: false });
validator.validate('qwertyui'); // {}
validator.validate('qwerty'); // { minLength: 'too small' }*/

const hasNumber = (string) => (string.search(/\d/) !== -1);

export default class PasswordValidator {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    const errors = {};

    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }

    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }
    return errors;
  }
}
