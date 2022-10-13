/* Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn). Аргументы функции:

obj – объект выступающий в роли контекста
fn() – функция привязываемая к контексту */

export default (obj, fn) => (...args) => fn.apply(obj, args);

//full version

const bind = function (obj, fn) {
  return function (...args) {
    return fn.apply(obj, args);
  };
};
