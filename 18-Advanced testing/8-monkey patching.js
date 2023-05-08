/*Протестируйте функцию getUserMainLanguage(username, client), 
которая определяет язык на котором пользователь создал больше всего репозиториев. 
Каждый репозиторий в этом списке содержит указание основного языка репозитория. 
Эта информация используется для поиска того языка, который используется чаще. 
Если список репозиториев пуст, функция возвращает null.*/

test('getUserMainLanguage', async () => {
  const data = [
    { language: 'php' },
    { language: 'javascript' },
    { language: 'CSS' },
    { language: 'ruby' },
    { language: 'php' },
  ];
  nock(/api\.github\.com/)
    .get('/users/user/repos')
    .reply(200, data);
  const mainLanguage = await getUserMainLanguage('user');
  expect(mainLanguage).toEqual('php');
});

test('get user main language when empty', async () => {
  nock(/api\.github\.com/)
    .get('/users/user-without-repos/repos')
    .reply(200, []);
  const mainLanguage = await getUserMainLanguage('user-without-repos');
  expect(mainLanguage).toBeNull();
});
