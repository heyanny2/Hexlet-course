/* Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число. Рациональное число должно быть представлено объектом со следующими методами:

Сеттер setNumer() - устанавливает числитель
Сеттер setDenom() - устанавливает знаменатель
Геттер getNumer() - возвращает числитель
Геттер getDenom() - возвращает знаменатель
Геттер toString() - возвращает строковое представление числа
Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!) */

const make = (numer, denom) => ({
  numer,
  denom,
  setNumer(newNumer) {
    this.numer = newNumer;
  },
  setDenom(newDenom) {
    this.denom = newDenom;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const newNumer = this.getNumer() * rational.getDenom() + this.getDenom() * rational.getNumer();
    const newDenom = this.getDenom() * rational.getDenom();
    return make(newNumer, newDenom);
  },
});

export default make;
