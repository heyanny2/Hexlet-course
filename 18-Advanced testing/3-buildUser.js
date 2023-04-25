/*Протестируйте функцию, которая генерирует случайного пользователя. Пользователь, в данном случае, это объект с тремя полями:
email
firstName
lastName
Нужно протестировать три ситуации:

Что вызов buildUser() возвращает объект нужной структуры.
Что каждый вызов buildUser() возвращает объект с другими данными.
Что работает установка свойств через параметры.*/

test('object structure', () => {
  const user = buildUser();
  expect(user).toEqual(expect.objectContaining({
    email: expect.any(String),
    firstName: expect.any(String),
    lastName: expect.any(String),
  }));
});

test('different users', () => {
  const user1 = buildUser();
  const user2 = buildUser();
  expect(user1).not.toEqual(user2);
});

test('set parameters', () => {
  const user = buildUser({ firstName: 'Anna' });
  expect(user.firstName).toEqual('Anna');
});
