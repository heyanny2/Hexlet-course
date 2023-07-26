/*Реализуйте и экспортируйте по умолчанию класс DatabaseConfigLoader, 
который отвечает за загрузку конфигурации для базы данных. У класса следующий интерфейс:

-Конструктор — принимает на вход путь, по которому нужно искать конфигурацию
-load(env) — метод, который грузит конфигурацию для конкретной среды окружения. 
Он загружает файл database.${env}.json, парсит его и возвращает результат наружу.

В этом классе и конфигурации реализована поддержка расширения. 
Если в загружаемой конфигурации есть ключ extend, то нужно загрузить конфигурацию с именем, хранящимся в этом ключе.
Конфигурации сливаются между собой так, что приоритет имеет загруженная раньше. Итоговая конфигурация не должна содержать ключ extend.*/

class DatabaseConfigLoader {
  constructor(pathToConfig) {
    this.pathToConfig = pathToConfig;
  }

  load(env) {
    const filename = `database.${env}.json`;
    const filepath = path.join(this.pathToConfig, filename);
    const file = fs.readFileSync(filepath);
    const parsedFile = JSON.parse(file);
    if (Object.hasOwn(parsedFile, 'extend')) {
      const newFile = this.load(parsedFile.extend);
      const merged = { ...newFile, ...parsedFile };
      const { extend, ...config } = merged;
      return config;
    }
    return parsedFile;
  }
}

export default DatabaseConfigLoader;
