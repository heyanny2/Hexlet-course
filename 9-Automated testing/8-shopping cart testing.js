/*Напишите тесты для корзины интернет-магазина. Интерфейс:

makeCart() – создаёт новую пустую корзину (объект).
addItem(good, count) – добавляет в корзину товары и их количество. Товар – это объект с двумя свойствами: name (имя) и price (стоимость).
getItems() – возвращает список товаров в формате [{ good, count }, { good, count }, ...]
getCost() – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
getCount() – возвращает количество товаров в корзине. */

test('cart items', () => {
  const cart = makeCart();
  expect(cart.getItems()).toHaveLength(0);

  const apple = { name: 'apple', price: 2 };
  cart.addItem(apple, 3);
  expect(cart.getItems()).toEqual(expect.arrayContaining([{ good: apple, count: 3 }]));
  expect(cart.getCost()).toEqual(6);
  expect(cart.getCount()).toEqual(3);

  const pear = { name: 'pear', price: 3 };
  cart.addItem(pear, 5);
  expect(cart.getItems()).toEqual(
    expect.arrayContaining([{ good: apple, count: 3 }, { good: pear, count: 5 }],
  ));
  expect(cart.getCost()).toEqual(21);
  expect(cart.getCount()).toEqual(8);
});
