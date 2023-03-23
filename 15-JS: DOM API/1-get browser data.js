/*Реализуйте и экспортируйте по умолчанию функцию, которая при вызове делает переход на страницу и возвращает строку с кодовым именем браузера, его версией и текущей открытой страницей.

Адрес страницы передаётся через параметр, а результат должен быть в виде строки вида 'Mozilla/5.0 https://hexlet.io'. Версия браузера записывается после косой черты, адрес страницы после пробела.

Пример:

solution('https://hexlet.io'); // => 'Mozilla/5.0 https://hexlet.io'
// Версия браузера может отличаться, тесты не проверяют версию */

export default (href) => {
  window.location.href = href;
  const { userAgent } = window.navigator;
  const [agentName] = userAgent.split(' ');
  return `${agentName} ${window.location.href}`;
};
