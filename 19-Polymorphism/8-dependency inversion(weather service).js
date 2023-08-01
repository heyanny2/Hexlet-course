/*Создайте полноценное консольное приложение, которое показывает текущую погоду в городе. Оно работает так:

$ node bin/weather.js berlin
Temperature in berlin: 11C // C - Цельсий

$ node bin/weather.js monaco
Temperature in monaco: 26C

Это консольное приложение обращается внутри себя к сервису погоды. Сервис погоды расположен по адресу http://localhost:8080. 
Информацию по городу можно извлечь сделав GET запрос на урл /api/v2/cities/<имя города>. 
Данные от сервиса возвращаются в виде json: { "name": "<имя города>", temperature: "<температура>" }, 
единица измерения не указана, но это всегда градус Цельсия. 
WeatherService.js
Реализуйте логику работы сервиса. Под сервисом здесь понимается класс, умеющий работать с конкретным сервисом погоды (в интернете их довольно много). В перспективе классов может быть много и они могут подменять друг друга (то есть обеспечивать полиморфизм).

Объект этого класса должен уметь запрашивать данные у сервера (адрес выше) по конкретному городу и возвращать их обратно.

Для извлечения данных о погоде, ему нужно выполнить http-запрос. Для выполнения подобных запросов понадобится http-клиент, 
библиотека, которая сама формирует правильный http-запрос и возвращает ответ. 
В нашем случае используется axios, наиболее популярный http-клиент в JavaScript-мире.

Сделайте так, чтобы http-клиент не был зашит внутри класса, используйте инъекцию зависимостей для проброса клиента во внутрь. 
Потенциально это позволит подменить реализацию http-клиента (то есть использовать другой клиент), без необходимости переписывать код сервиса.

bin/weather.js
Реализуйте код, вызывающий сервис и печатающий на экран ожидаемую строку. Для извлечения города из аргументов командной строки, 
воспользуйтесь свойством argv глобального объекта process. 
Первый аргумент (передаваемое имя города) находится под индексом 2. */

//WeatherService.js
const apiUrl = 'http://localhost:8080/api/v2/';

class WeatherService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async find(city) {
    const url = new URL(`cities/${city}`, apiUrl);
    const response = await this.httpClient.get(url.toString());
    return JSON.parse(response.data);
  }
}

export default WeatherService;

//Weather.js
import axios from 'axios';
import WeatherService from '../WeatherService.js';

const weather = new WeatherService(axios);
const cityName = process.argv[2];
weather.find(cityName).then((data) => {
  const message = `Temperature in ${data.name}: ${data.temperature}C`;
  console.log(message);
});
