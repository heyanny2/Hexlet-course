/* Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов:

Money(value, currency = 'usd') – создает объект-деньги.
Money.prototype.getValue() – возвращает стоимость в виде числа
Money.prototype.getCurrency() – возвращает валюту денег
Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
Money.prototype.format() – возвращает локализованное представление денег удобное для вывода
Наша реализация поддерживает только две валюты: usd и eur без возможности расширения. Коэффициенты конверсии:

usd -> eur = 0.7
eur -> usd = 1.2 */

  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};
Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};
Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currentValue = this.getValue();
  const currency = this.getCurrency();
  if (currency === newCurrency) {
    return new Money(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];
  return new Money(newValue, newCurrency);
};
Money.prototype.add = function add(money) {
  const currency = this.getCurrency();
  const convertedMoney = money.exchangeTo(currency);
  const additionalMoney = convertedMoney.getValue();
  return new Money(this.getValue() + additionalMoney, currency);
};
Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};
