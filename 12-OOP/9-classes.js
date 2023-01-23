/* Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:

addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
getCount – возвращает количество товаров в корзине */

import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return _.sumBy(this.getItems(), (goods) => (goods.item.price * goods.count));
  }

  getCount() {
    return _.sumBy(this.getItems(), (goods) => goods.count);
  }
}

export default Cart;
