/*Протестируйте функцию getUserMainLanguage(username, client), 
которая определяет язык на котором пользователь создал больше всего репозиториев. 
Для реализации этой задачи, функция getUserMainLanguage() выполняет запрос через @octokit/rest, 
который извлекает все репозитории указанного пользователя (по первому параметру username). 
Каждый репозиторий в этом списке содержит указание основного языка репозитория. 
Эта информация используется для поиска того языка, который используется чаще. 
Если список репозиториев пуст, функция возвращает null.

Пример:
// Запрос который выполняет функция getUserMainLanguage
// Именно этот метод нужно будет подменить в фейковом клиенте
const { data } = await client.repos.listForUser({ username });
// data – список репозиториев. У каждого репозитория может быть много полей
// но нас интересует ровно одно – language
// Эти данные нужно подготовить в тестах для фейкового клиента
console.log(data);
// [{ language: 'php', ... }, { language: 'javascript', ... }, ...]*/

class OctokitFake {
  constructor(data) {
    this.data = data;
  }

  repos = {
    listForUser: () => (
      Promise.resolve({ data: this.data })
    ),
  };
}

test('get user main language', async () => {
  const data = [
    { language: 'php' },
    { language: 'javascript' },
    { language: 'CSS' },
    { language: 'ruby' },
    { language: 'php' },
  ];
  const client = new OctokitFake(data);
  const mainLanguage = await getUserMainLanguage('user', client);
  expect(mainLanguage).toEqual('php');
});

test('get user main language when empty', async () => {
  const client = new OctokitFake([]);
  const mainLanguage = await getUserMainLanguage('user-without-repos', client);
  expect(mainLanguage).toBeNull();
});
