/*Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. 

То есть приводит их к определенному виду. Нормализация происходит путём изменения исходного объекта.

На вход этой функции подается объект, описывающий собой урок курса. В уроке содержатся два поля: имя и описание.
- Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
- Весь текст описания приводится к нижнему регистру. */

import _ from 'lodash';

const normalize = (lesson) => {
  lesson.name = _.capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
};

export default normalize;

// tests

const lesson = { name: 'intro', description: 'about Something' };
console.log(normalize(lesson));

/* {
  name: 'Intro',
  description: 'about something',
 } */

const lesson1 = { name: '', description: 'Some Description' };
console.log(normalize(lesson1));

/* {
  name: '',
  description: 'some description',
} */
