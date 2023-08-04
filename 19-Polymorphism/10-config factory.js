/*ConfigFactory.js
Создайте фабрику, которая принимает на вход путь до файла конфигурации в формате либо json либо yaml и возвращает объект класса Config. 
Конструктор класса Config принимает на вход объект с данными, полученными из конфигурационных файлов и предоставляет к нему доступ с помощью 
метода getValue.
parsers/JsonParser.js
Реализуйте класс, отвечающий за парсинг json. Используйте внутри JSON.parse().
parsers/YamlParser.js
Реализуйте класс, отвечающий за парсинг yaml. Для парсинга используется сторонний компонент js-yaml. Используйте метод load().
*/
//ConfigFactory.js
const mapping = {
  json: JsonParser,
  yaml: YamlParser,
  yml: YamlParser,
};

export default class CreateConfigFactory {
  static factory(filePath) {
    const fileExtension = path.extname(filePath).slice(1);
    const parser = new mapping[fileExtension]();

    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = parser.parse(rawData);
    return new Config(data);
  }
}
//parsers/JsonParser.js
export default class JsonParser {
  parse(rawData) {
    return JSON.parse(rawData);
  }
}
//parsers/YamlParser.js
export default class YamlParser {
  parse(rawData) {
    return yaml.load(rawData);
  }
}
