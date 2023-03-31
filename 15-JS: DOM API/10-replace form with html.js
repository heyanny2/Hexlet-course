/*В этом упражнении мы отработаем "ручное" экранирование данных при установке их через свойство innerHTML.
В задании дана форма обратной связи, состоящая из трех полей: email, name и comment. Напишите и экспортируйте функцию по умолчанию, которая при отправке формы получает из неё данные и экранирует их. Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо формы появляется документ с такой структурой (элемент формы заменяется на другой элемент):

<div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>
Для экранирования введённых данных используйте функцию htmlEscape() из библиотеки escape-goat.

После отправки формы, выводятся данные, которые пользователь ввел.*/

import { htmlEscape } from 'escape-goat';

const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `<p>Feedback has been sent</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  `;
  element.replaceWith(div);
};
export default () => {
  const form = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    render(form, Object.fromEntries(formData));
  };
  form.addEventListener('submit', handle);
};
